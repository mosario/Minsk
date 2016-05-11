import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

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
		this.handleGetPos = this.handleGetPos.bind(this)
	}
	handleClick = (key) => this.setState({current: key});
	handleGetPos(e){
		console.log("eee", e)
	}
	getPos(e){
		console.log(e)
	}
	next(e){
		let current = this.state.current;
		if(current > e){
			this.refs.swipe.prev();
		}else{
			this.refs.swipe.next();
		}
		this.setState({current: e});
	}
	render(){
		let url = this.state.url;
		let current = this.state.current;
		const images = Object.keys(url).map((i) =>
				<div key={i} id="height_300">
					<img src={url[i]} width="100%" />
				</div>
			)
		const slider = 
			<ReactSwipe ref="swipe" className="carousel" 
				swipeOptions={{continuous: true, callback(index, elem){console.log("eeefsdfsf", this, index)}}}
				getPos={e => this.getPos(e)}>				
				{images}
			</ReactSwipe>
		return <div>
			{slider}
			<div className="gallery-button">
				<button onClick={this.next.bind(this, 0)} id={current == 0 ? 'active' : 'none'}></button>
				<button onClick={this.next.bind(this, 1)} ></button>
				<button onClick={this.next.bind(this, 2)} ></button>
			</div>
		</div>
	}
	handleTouchTap = (e) => console.log("e", e);
}