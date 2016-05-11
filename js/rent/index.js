import React, { Component } from 'react'
import Nouislider from 'react-nouislider'
import RequestCall from '../main/request_call'
import 'react-nouislider/example/nouislider.css'
import { data } from '../text/data'

const style = {
	color:{
		color:'#cc0033'
	},
	active:{
		fontSize: 20,
		color:'#cc0033'
	},
	bottom:{
		marginBottom: 80
	},
	nouislider:{
		marginLeft:10
	},
	tax:{
		float:'right',
		marginRight: 80
	}
}

const active = (key) => <div className="col-md-8 col-offset-4">
	<div className="col-md-3"><p>Площадь</p><p style={style.active}>{key.square}</p></div>
	<div className="col-md-3"><p>Ставка</p><p style={style.active}>{key.bet}</p></div>
	<div className="col-md-3"><p>Налог</p><p style={style.active}>{key.tax}</p></div>
	<div className="col-md-3"><p>Этаж</p><p style={style.active}>{key.floor}</p></div>
</div>

const ellipse = <img style={style.tax} src="./icons/ellipse_active.png" />
const base = <img style={style.tax} src="./icons/ellipse_base.png" />

export default class Rent extends Component{
	constructor(props){
		super(props);
		this.state = {
			active:0,
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
			result: data,
			range:{
				square:{
					to: 30,
					from: 500
				},
				bet:{
					to: 10000,
					from: 50000,
				},
				floor:{
					to: 1,
					from: 15
				}
			},
			usn:true,
			nds:true,
			order: {}
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
	condition = (state) => {
		let result = [];
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
	handleClick = (i) => {
		this.setState({active: i})
		let element = document.querySelector(".header");
		element.scrollIntoView();
	}

	handleUsn = () => {
		let state = this.state;
		state.usn = !state.usn;
		this.condition(state);
	}

	handleNds = () => {
		let state = this.state;
		state.nds = !state.nds;
		this.condition(state);
	}

	handleOrder = () => {
		let element = document.querySelector(".request-call");
		element.scrollIntoView();
		this.setState({order: data[this.state.active]})
	}
	render(){
		let result = this.state.result;
		return <div className="calc__page rent">
			<div className="header">
				<p id="title">Аренда</p>
				<div className="row">
					{active(data[this.state.active])}
					<div id="order" onClick={::this.handleOrder}>
						<img src="./icons/phone2.png" />
					</div>
				</div>
			</div>
			<div className="padd row">
				<div className="col-md-4">
					<p id="filtered_title">фильтровать офисы</p>
					<div style={style.bottom}>
						<div className="range-text">
							<p id="title">Площадь</p>
							<input type="text" placeholder="ОТ"
								onChange={this.handleChange.bind(this, 'square_to')}  />
							<input type="text" placeholder="ДО"
								onChange={this.handleChange.bind(this, 'square_from')} />
						</div>
						<div style={style.nouislider}>
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
					<div style={style.bottom}>
						<div className="range-text">
							<p id="title">Ставка</p>
							<input type="text" placeholder="ОТ"
								onChange={this.handleChange.bind(this, 'bet_to')}  />
							<input type="text" placeholder="ДО"
								onChange={this.handleChange.bind(this, 'bet_from')} />
						</div>
						<div style={style.nouislider}>
							<Nouislider
							    range={{min: 10000, max: 100000}}
							    start={[
							    	this.state.range.bet.to,
							    	this.state.range.bet.from
							    ]}
							    step={100} connect={true}
							    tooltips 
							    onChange={this.handleRange.bind(this, 'bet')} />
						</div>
					</div>
					<div style={style.bottom}>
						<div className="range-text">
							<p id="title">Этаж</p>
							<input type="text" placeholder="ОТ"
								onChange={this.handleChange.bind(this, 'floor_to')}  />
							<input type="text" placeholder="ДО"
								onChange={this.handleChange.bind(this, 'floor_from')} />
						</div>
						<div style={style.nouislider}>
							<Nouislider
							    range={{min: 1, max: 30}}
							    start={[
							    	this.state.range.floor.to,
							    	this.state.range.floor.from
							    ]}
							    step={1} connect={true}
							    tooltips 
							    onChange={this.handleRange.bind(this, 'floor')} />
						</div>
					</div>
					<div style={style.bottom}>
						<div className="range-text">
							<p id="title">Налог</p>
							<p style={{cursor: 'pointer'}}
								onClick={::this.handleUsn}>
								УСН
								{this.state.usn ? ellipse : base}
							</p>
							<p style={{cursor: 'pointer'}}
								onClick={::this.handleNds}>
								Включая НДС
								{this.state.nds ? ellipse : base}
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-8">
					<div className="show">
						<div className="col-md-3"><p>Площадь</p></div>
						<div className="col-md-3"><p>Ставка</p></div>
						<div className="col-md-3"><p>Налог</p></div>
						<div className="col-md-3"><p>Этаж</p></div>
					</div>
					{Object.keys(result).map((i) =>
						<div className="result" key={i} onClick={this.handleClick.bind(this,i)}>
							<div className="col-md-3"><p style={style.color}>{result[i].square} м2</p></div>
							<div className="col-md-3"><p style={style.color}>{result[i].bet.toLocaleString('ru-RU')} руб/мес.</p></div>
							<div className="col-md-3"><p>{result[i].tax}</p></div>
							<div className="col-md-3"><p>{result[i].floor}</p></div>
						</div>
					)}
				</div>
			</div>
			<RequestCall order={this.state.order} />
		</div>
	}
}