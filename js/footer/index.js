import React, { Component, findDOMNode } from 'react'

export default class Footer extends Component{
	constructor(){
		super();
		this.state = {
			id: 0
		}
	}
	handleClick = (e) => this.setState({id:e.target.value});

	handleScroll = () => window.scrollTo(0, 0);
	
	render(){
		let id = this.state.id;
		return <div className="footer">
			<div className="row">
				<div className="col-md-4">
					<ul className="nav nav-pills nav-stacked" 
						ref="ul_nav" onClick={::this.handleClick}>
					  <li value="1">Адрес</li>
					  <li value="2">Часы работы</li>
					  <li value="3">Адрес электронной почты</li>
					  <li value="4">Станция метро</li>
					  <li value="5">Телефон</li>
					</ul>
				</div>
				<div className="col-md-4">
					<ul ref="ul_list" 
						className="nav nav-pills nav-stacked"
						onClick={::this.handleClick} >
					  <li value="1" style={id == 1 ? {color: '#fff'} : {}}>Москва,ул.Минская д.2Ж</li>
					  <li value="2" style={id == 2 ? {color: '#fff'} : {}} id="special">Ежедневно с 10 до 19 часов, кроме субботы и воскресенья</li>
					  <li value="3" style={id == 3 ? {color: '#fff'} : {}}>info@minskayaplaza.ru</li>
					  <li value="4" style={id == 4 ? {color: '#fff'} : {}}>Славянский бульвар</li>
					  <li value="5" style={id == 5 ? {color: '#fff'} : {}}>+7 (495) 799 07 07</li>
					</ul>
				</div>
				<div className="social col-md-4">
					<ul className="nav nav-pills nav-stacked">
					  <li><a href="#">
					  		<img src="./icons/facebook-White.png" />Facebook</a></li>
					  <li><a href="#">
					  		<img src="./icons/vkontakte-White.png" />ВКонтакте</a></li>
					  <li>
					  	<img src="./icons/up.png" 
					  		style={{marginLeft:'15%'}} 
					  		onClick={::this.handleScroll} /></li>
					</ul>
				</div>
				<div className="col-md-12">
					<ul className="nav nav-pills">
					  <li><a href="#">главная</a></li>
					  <li><a href="#">аренда офисов</a></li>
					  <li><a href="#">продажа офисов</a></li>
					  <li><a href="#">о бизнес центре</a></li>
					  <li><a href="#">контакты</a></li>
					</ul>
				</div>
			</div>
		</div>
	}
}