import React, { Component } from 'react'

export default class Display extends Component{
	constructor(props){
		super(props);
		this.state = {
			show: false
		}
	}

	handleClick = () => this.setState({show: !this.state.show})

	render(){
		let filtered = [];
		let data = this.props.data;
		let count = this.state.show ? data.length-1 : 1;
		for(let i = 0; i<=count; i++){
			filtered.push(data[i]);
		}
		return <div className="display">
		<div></div>
		<div className="row">
			{Object.keys(filtered).map((i) =>
				<div key={i}> 
					<div className="col-md-3"><p>{filtered[i].square} м2</p></div>
					<div className="col-md-3"><p>{filtered[i].bet.toLocaleString('ru-RU')} руб/мес.</p></div>
					<div className="col-md-3"><p>{filtered[i].tax}</p></div>
					<div className="col-md-3"><p>{filtered[i].floor}</p></div>
				</div>
			)}
		</div>
		<p id="display-all" onClick={::this.handleClick}>
			{this.state.show ? 'Смотреть только часть' : 'Смотреть все предложения'}
		</p>
		</div>
	}
}