import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

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
							<a href="#" id="logo"><img src="./icons/logo.svg" width="200px" /></a>
						</Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav pullRight>
				        <NavItem eventKey={1} href="#">аренда офисов</NavItem>
				        <NavItem eventKey={2} href="#">продажа офисов</NavItem>
				        <NavItem eventKey={2} href="#">о бизнес-центре</NavItem>
				        <NavItem eventKey={2} href="#">контакты</NavItem>
				      </Nav>
				    </Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	}
}
