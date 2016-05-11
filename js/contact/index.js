import React, { Component } from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps'

const coords = {
  lat: 55.727673,
  lng: 37.493982
};

export default class Contact extends Component{
	onMapCreated(map){
	    map.setOptions({
	      disableDefaultUI: true
	    })
	}
	onDragEnd(e) {
		console.log('onDragEnd', e);
	}
	onCloseClick() {
		console.log('onCloseClick');
	}
	onClick(e) {
		console.log('onClick', e);
	}
	render(){
		return <div className="contact">
			<div className="header">
				<p id="title">Контакты</p>
			</div>
			<Gmaps
		        width={'100%'}
		        height={'300px'}
		        lat={coords.lat}
		        lng={coords.lng}
		        zoom={12}
		        loadingMessage={'Be happy'}
		        params={{v: '3.exp'}}
		        onMapCreated={this.onMapCreated}>
		        <Marker
		          lat={coords.lat}
		          lng={coords.lng}
		          draggable={true}
		          onDragEnd={this.onDragEnd} />
		      </Gmaps>
		</div>
	}
}