import React, { Component } from 'react'

export default class BigGallery extends Component{
	constructor(){
		super();
		this.state = {
			current: 0,
			url:[
				'./image/DSC_2624.jpg',
				'./image/DSC_2628.jpg',
				'./image/DSC_2632.jpg',
				'./image/DSC_2648.jpg',
				'./image/DSC_2669.jpg',
				'./image/DSC_2695.jpg',
				'./image/DSC_2723.jpg',
				'./image/DSC_2739.jpg',
				'./image/DSC_2747.jpg'
			]
		}
	}
	handleClick = (key) => this.setState({current: key});
	render(){
		let url = this.state.url;
		let current = this.state.current;
		return <div className="gallery-big">
			<p>Галерея</p>
			<ul className="nav nav-pills">
			  <li><a href="#">экстерьер</a></li>
			  <li><a href="#">интерьер</a></li>
			  <li><a href="#">общие зоны</a></li>
			</ul>
			<div className="container-img">
				{Object.keys(url).map((i) =>
					<img key={i} src={url[i]} />
				)}
			</div>
			<div className="gallery-button">
				<button onClick={this.handleClick.bind(this,0)} id={current == 0 ? 'active' : 'none'}></button>
				<button onClick={this.handleClick.bind(this,1)} id={current == 1 ? 'active' : 'none'}></button>
				<button onClick={this.handleClick.bind(this,2)} id={current == 2 ? 'active' : 'none'}></button>
			</div>
		</div>
	}
}