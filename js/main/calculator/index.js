import React, { Component, findDOMNode } from 'react'
import ReactDOM from 'react-dom'
import Display from './display'
import Nouislider from 'react-nouislider'
import 'react-nouislider/example/nouislider.css'

const active = <img src="./icons/ellipse_active.png" />
const base = <img src="./icons/ellipse_base.png" />

export default class Calculator extends Component{
	static defaultProps = {
		data: [
				{
					square:50,
					bet: 15000,
					tax: 'УСН',
					floor: 4
				},
				{
					square:110,
					bet: 19000,
					tax: 'Включая НДС',
					floor: 1
				},
				{
					square:390,
					bet: 13000,
					tax: 'Включая НДС',
					floor: 1
				},
				{
					square:500,
					bet: 20000,
					tax: 'Без НДС',
					floor: 5
				},
				{
					square:456,
					bet: 21000,
					tax: 'Без УСН',
					floor: 7
				},
				{
					square:250,
					bet: 22000,
					tax: 'УСН',
					floor: 8
				}]
	};
	constructor(props){
		super(props);
		this.state = {
			square:{
				to: 0,
				from: 10000
			},
			bet:{
				to: 0,
				from: 100000
			},
			floor:{
				to: 0,
				from: 20
			},
			result: this.props.data,
			range:{
				square:{
					to: 30,
					from: 500
				},
				bet:{
					to: 10000,
					from: 50000,
				}
			},
			usn: true,
			nds: true,
			rent: true,
			decoration: true
		}
	}
	handleChange = (i, e) => {
		let key = i.split('_');
		let state = this.state;
		state[key[0]][key[1]] = e.target.value;
		this.condition(state);
	}
	handleRange = (i, e) => {
		let state = this.state;
		let to 	 = parseInt(e[0]);
		let from = parseInt(e[1]);
		state[i].to = to;
		state[i].from = from;
		state.range[i].to = to;
		state.range[i].from = from;
		this.condition(state);
	}
	handleTax = (e) => {
		let state = this.state;		
		state[e] = !state[e];
		this.condition(state);
	}
	condition = (state) => {
		let result = [];
		let data = this.props.data;
		for (let i = 0; i < data.length; i++) {
			if(data[i].square >= state.square.to && 
				data[i].square <= state.square.from &&
				data[i].bet >= state.bet.to && 
				data[i].bet <= state.bet.from &&
				data[i].floor >= state.floor.to && 
				data[i].floor <= state.floor.from){
				if(state.nds == true){
					if(data[i].tax == 'Включая НДС'){
						result.push(data[i]);
					}
				}else if(data[i].tax == 'Без НДС'){
					result.push(data[i]);
				}
				if(state.usn == true){
					if(data[i].tax == 'УСН'){
						result.push(data[i])
					}
				}else if(data[i].tax == 'Без УСН'){
					result.push(data[i]);
				}
			}			
		};
		state.result = result;
		this.setState(state);
	}

	componentWillMount = () => this.condition(this.state);

	handleDecoration = () => this.setState({decoration: !this.state.decoration});

	handleRent = () => this.setState({rent: !this.state.rent});

	render(){
		return <div className="calculator">
			<ul className="nav nav-pills">
			  <li><button id={this.state.rent ? "" : "none"}
			  		onClick={::this.handleRent}>аренда</button></li>
			  		
			  <li><button id={this.state.rent ? "none" : ""}
			  		onClick={::this.handleRent}>продажа</button></li>
			</ul>
			<div className="row">
				<div className="col-md-3">
					<p id="title">Площадь <span id="for"> М 2</span></p>
					<div className="range-text">
						<input type="text" placeholder="ОТ" 
							ref="square_to"
							onChange={this.handleChange.bind(this, 'square_to')} />
						<input type="text" placeholder="ДО"
							ref="square_from"
							onChange={this.handleChange.bind(this, 'square_from')} />
					</div>
					<div className="range-edit">
						<Nouislider
						    range={{min: 0, max: 1000}}
						    start={[
						    	this.state.range.square.to,
						    	this.state.range.square.from
						    ]}
						    step={10} connect={true}
						    tooltips
						    onChange={this.handleRange.bind(this, 'square')} />
					</div>
				</div>
				<div className="col-md-3">
					<p id="title">Ставка <span id="for"> руб/мес</span></p>
					<div className="range-text">
						<input type="text" placeholder="ОТ"
							ref="bet_to"
							onChange={this.handleChange.bind(this, 'bet_to')} />
						<input type="text" placeholder="ДО"
							ref="bet_from"
							onChange={this.handleChange.bind(this, 'bet_from')} />
					</div>
					<div className="range-edit">
						<Nouislider
						    range={{min: 10000, max: 100000}}
						    start={[
						    	this.state.range.bet.to,
						    	this.state.range.bet.from
						    ]}
						    step={1000} connect={true}
						    tooltips
						    onChange={this.handleRange.bind(this, 'bet')} />
					</div>
				</div>
				<div className="col-md-3">
					<p id="title">Налог</p>
					<div className="range-text" style={{marginTop:75}}>
						<ul className="nav nav-pills">
						  <li>
						  	<button id={this.state.usn ? "active" : "none"}
						  		onClick={this.handleTax.bind(this,"usn")}>
						  		УСН
						  	</button>
						  </li>
						  <li>
						  <button id={this.state.nds ? "active" : "none"}
						   onClick={this.handleTax.bind(this,"nds")}>
						   ВКЛЮЧАЯ НДС
						   </button>
						  </li>
						</ul>
					</div>
					<div className="range-edit">
						<p style={{cursor: 'pointer'}}
							onClick={::this.handleDecoration}>
							ОТДЕЛКА ОФИСА
							{this.state.decoration ? active : base}
						</p>
					</div>
				</div>
				<div className="col-md-3">
					<p id="title">Этаж</p>
					<div className="range-text" style={{marginTop:75}}																																	>
						<input type="text" placeholder="ОТ"
							onChange={this.handleChange.bind(this, 'floor_to')} />
						<input type="text" placeholder="ДО"
							onChange={this.handleChange.bind(this, 'floor_to')} />
					</div>
				</div>
			</div>
			<Display data={this.state.result} />
		</div>
	}
}