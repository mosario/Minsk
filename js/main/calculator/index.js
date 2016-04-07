import React, { Component } from 'react'
import Display from './display'

export default class Calculator extends Component{
	constructor(){
		super();
		this.state = {
			square:{
				to: 'ОТ',
				from: 'ДО'
			},
			bet:{
				to: 'ОТ',
				from: 'ДО'
			},
			floor:{
				to: 'ОТ',
				from: 'ДО'
			}
		}
	}
	render(){
		return <div className="calculator">
			<ul className="nav nav-pills">
			  <li><a href="#">аренда</a></li>
			  <li><a href="#">продажа</a></li>
			</ul>
			<div className="row">
				<div className="col-md-3">
					<p id="title">Площадь</p>
					<p id="for">М 2</p>
					<div className="range-text">
						<input type="text" placeholder="ОТ" />
						<input type="text" placeholder="ДО" />
					</div>
					<div className="range-edit">
						<input type="range" max="100" min="0" step="1" />
						<input type="range" max="100" min="0" step="1" />
					</div>
				</div>
				<div className="col-md-3">
					<p id="title">Ставка</p>
					<p id="for">руб/мес</p>
					<div className="range-text">
						<input type="text" placeholder="ОТ" />
						<input type="text" placeholder="ДО" />
					</div>
					<div className="range-edit">
						<input type="range" max="100" min="0" step="1" />
						<input type="range" max="100" min="0" step="1" />
					</div>
				</div>
				<div className="col-md-3">
					<p id="title">Налог</p>
					<div className="range-text" style={{marginTop:75}}>
						<ul className="nav nav-pills">
						  <li><a href="#">УСН</a></li>
						  <li><a href="#">ВКЛЮЧАЯ НДС</a></li>
						</ul>
					</div>
					<div className="range-edit">
						<p>ОТДЕЛКА ОФИСА <img src="./icons/ellipse_active.png" /></p>
					</div>
				</div>
				<div className="col-md-3">
					<p id="title">Этаж</p>
					<div className="range-text" style={{marginTop:75}}																																	>
						<input type="text" placeholder="ОТ" />
						<input type="text" placeholder="ДО" />
					</div>
				</div>
			</div>
			<Display />
		</div>
	}
}