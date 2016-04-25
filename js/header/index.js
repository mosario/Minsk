import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class Header extends Component{
	render(){
		return <div className="row">
			<div className="header-top">
				<div className="col-md-8">
					<div className="contacts">
						<a href="#" id="address">москва, ул. минская, д 2ж</a>
						<a href="#" id="nomber">+7 (987) 654 32 21</a>
						<a href="mailto:info@minskayaplaza.ru" id="mail">info@minskayaplaza.ru</a>
					</div>
				</div>
				<div className="social col-md-2 col-md-offset-10">
					<a href="#" id="vk"><img src="./icons/vkontakte_Black.png" width="25px" /></a>
					<a href="#" id="fb"><img src="./icons/facebook_Black.png" width="25px" /></a>
				</div>
			</div>

			<div className="header col-md-12">
		        <Navbar>
				    <Navbar.Header>
				    	<Navbar.Brand>
				    		<Link to="/main" id="logo"><img src="./icons/logo.svg" width="200px" /></Link>
						</Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav pullRight>
				      	<li><Link to="/rent">аренда офисов</Link></li>
				      	<li><Link to="/sale">продажа офисов</Link></li>
				      	<li><Link to="/about">о бизнес-центре</Link></li>
				      	<li><Link to="/contacts">контакты</Link></li>
				      </Nav>
				    </Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	}
}
