import React, { Component } from 'react'

const style = {
	photo:{
		width:'100%',
		height:300,
		overflow:'hidden'
	}
}

export default class Gallery extends Component{
	constructor(){
		super();
		this.state = {
			current: 0,
			url:[
				'./image/DSC_2755.jpg',
				'./image/DSC_2739.jpg',
				'./image/DSC_2747.jpg'
			]
		}
	}
	handleClick = (key) => this.setState({current: key});

	render(){
		let url = this.state.url;
		let current = this.state.current;
		return <div>
			<div style={style.photo}>
				<img src={url[current]} width="100%"/>
			</div>
			<div className="gallery-button">
				<button onClick={this.handleClick.bind(this,0)} id={current == 0 ? 'active' : 'none'}></button>
				<button onClick={this.handleClick.bind(this,1)} id={current == 1 ? 'active' : 'none'}></button>
				<button onClick={this.handleClick.bind(this,2)} id={current == 2 ? 'active' : 'none'}></button>
			</div>
		</div>
	}
}