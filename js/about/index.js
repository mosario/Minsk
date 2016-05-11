import React, { Component } from 'react'
import Abouts from '../main/about'
import LogoGroup from '../main/logo-group'

export default class About extends Component{
	render(){
		return <div className="about">
			<Abouts />
			<LogoGroup />
		</div>
	}
}