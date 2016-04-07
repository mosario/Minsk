import React, { Component } from 'react'
import { TITLE_TEXT_ONE, TITLE_TEXT_TWO } from '../text/main' 
import Gallery from '../gallery'
import About from './about'
import BigGallery from '../gallery/big_gallery'
import Calculator from './calculator'
import RequestCall from './request_call'
import LogoGroup from './logo-group'

export default class Main extends Component{
	render(){
		return <div className="main">
			<div className="title">
				<p id="t1" style={{paddingTop:10}}>бизнес центр</p>
				<p id="t1" style={{marginTop:'-20px'}}>минская плаза</p>
			</div>
			<div className="title-text">
				<p>{TITLE_TEXT_ONE}</p>
				<p>{TITLE_TEXT_TWO}</p>
			</div>
			<Gallery />
			<About />
			<BigGallery />
			<Calculator />
			<RequestCall />
			<LogoGroup />
		</div>
	}
}