import React, { Component, findDOMNode } from 'react'
import { Link } from 'react-router'

function scrollToTop(scrollDuration) {
	const scrollHeight = window.scrollY,
	scrollStep = Math.PI / ( scrollDuration / 15 ),
	cosParameter = scrollHeight / 2;
	var scrollCount = 0,
	scrollMargin,
	scrollInterval = setInterval( function() {
	if(window.scrollY != 0){
		scrollCount = scrollCount + 1;  
		scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
		window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
	} 
	else clearInterval(scrollInterval); 
	}, 15);
}

export default class Footer extends Component{
	constructor(){
		super();
		this.state = {
			id: 0
		}
	}
	handleClick = (e) => this.setState({id:e.target.value});

	handleScroll = () => scrollToTop(1000);

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
					<ul className="nav nav-pills" onClick={::this.handleScroll}>
					  <li><Link to="/minsk/">главная</Link></li>
					  <li><Link to="/minsk/rent">аренда офисов</Link></li>
					  <li><Link to="/minsk/sale">продажа офисов</Link></li>
					  <li><Link to="/minsk/about">о бизнес-центре</Link></li>
				      <li><Link to="/minsk/contacts">контакты</Link></li>
					</ul>
				</div>
			</div>
		</div>
	}
}