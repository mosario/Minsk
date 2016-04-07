import React, { Component } from 'react'

export default class Display extends Component{
	render(){
		return <div className="display">
		<div></div>
		<div className="row">
			<div className="col-md-3"><p>110</p></div>
			<div className="col-md-3"><p>15 000</p></div>
			<div className="col-md-3"><p>УСН</p></div>
			<div className="col-md-3"><p>4</p></div>

			<div className="col-md-3"><p>55-7</p></div>
			<div className="col-md-3"><p>13 000</p></div>
			<div className="col-md-3"><p>Включая НДС</p></div>
			<div className="col-md-3"><p>Подвальный этаж</p></div>
		</div>
		<p id="display-all">Смотреть все предложения</p>
		</div>
	}
}