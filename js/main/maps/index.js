import React, { Component } from 'react'
import { map } from './maps'

export default class Map extends Component{
	render(){
		return <div>
			<p>Карта</p>
			<div id="map"></div>
			{map}
		</div>
	}
}

