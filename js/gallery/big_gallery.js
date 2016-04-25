import React, { Component } from 'react'

export default class BigGallery extends Component{
	static defaultProps = {
		url:[
			'./image/DSC_2624-min.jpg',
			'./image/DSC_2628-min.jpg',
			'./image/DSC_2632-min.jpg',
			'./image/DSC_2648-min.jpg',
			'./image/DSC_2669-min.jpg',
			'./image/DSC_2695-min.jpg',
			'./image/DSC_2723-min.jpg',
			'./image/DSC_2739-min.jpg',
			'./image/DSC_2747-min.jpg'
			]
	};
	constructor(props){
		super(props);
		this.state = {
			current: 0,
			link: 'exterior',
			exterior:[
				[
					this.props.url[0],
					this.props.url[1],
					this.props.url[2],
					this.props.url[3],
					this.props.url[4],
					this.props.url[5],
					this.props.url[6],
					this.props.url[7],
					this.props.url[8]
				],
				[
					this.props.url[8],
					this.props.url[7],
					this.props.url[6],
					this.props.url[4],
					this.props.url[3],
					this.props.url[5],
					this.props.url[0],
					this.props.url[1],
					this.props.url[2]
				],
				[
					this.props.url[3],
					this.props.url[2],
					this.props.url[1],
					this.props.url[0],
					this.props.url[8],
					this.props.url[7],
					this.props.url[6],
					this.props.url[5],
					this.props.url[4]
				]
			],
			interior:[
				[
					this.props.url[1],
					this.props.url[2],
					this.props.url[3],
					this.props.url[0],
					this.props.url[8],
					this.props.url[6],
					this.props.url[7],
					this.props.url[5],
					this.props.url[4]
				],
				[
					this.props.url[5],
					this.props.url[4],
					this.props.url[3],
					this.props.url[2],
					this.props.url[1],
					this.props.url[0],
					this.props.url[8],
					this.props.url[7],
					this.props.url[6]
				],
				[
					this.props.url[8],
					this.props.url[6],
					this.props.url[4],
					this.props.url[2],
					this.props.url[0],
					this.props.url[1],
					this.props.url[3],
					this.props.url[5],
					this.props.url[7]
				]
			],
			common_areas:[
				[
					this.props.url[7],
					this.props.url[5],
					this.props.url[3],
					this.props.url[1],
					this.props.url[8],
					this.props.url[6],
					this.props.url[4],
					this.props.url[2],
					this.props.url[0]
				],
				[
					this.props.url[0],
					this.props.url[2],
					this.props.url[4],
					this.props.url[6],
					this.props.url[8],
					this.props.url[1],
					this.props.url[3],
					this.props.url[5],
					this.props.url[7]
				],
				[
					this.props.url[8],
					this.props.url[7],
					this.props.url[1],
					this.props.url[0],
					this.props.url[6],
					this.props.url[5],
					this.props.url[2],
					this.props.url[3],
					this.props.url[4]
				]
			]
		}
	}
	handleClick = (key) => this.setState({current: key});

	handleClickLink = (key) => this.setState({link: key});
	
	render(){
		let link = this.state.link;
		let url = this.state[link];
		let current = this.state.current;
		return <div className="gallery-big">
			<p>Галерея</p>
			<ul className="nav nav-pills">
			  <li><button onClick={this.handleClickLink.bind(this,'exterior')}>экстерьер</button></li>
			  <li><button onClick={this.handleClickLink.bind(this,'interior')}>интерьер</button></li>
			  <li><button onClick={this.handleClickLink.bind(this,'common_areas')}>общие зоны</button></li>
			</ul>
			<div className="container-img">
				{Object.keys(url[current]).map((i) =>
					<img key={i} src={url[current][i]} />
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