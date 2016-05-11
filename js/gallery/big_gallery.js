import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'


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
		let link = this.state.link;
		let url = this.state[link];
		let current = this.state.current;
		const big = <div className="container-img">
			<ReactSwipe ref="swipe" className="carousel" swipeOptions={{continuous: true}}>
				<div>
					{Object.keys(url[0]).map((i) =>				
						<img key={i} src={url[0][i]} />
					)}
				</div>
				<div>
					{Object.keys(url[1]).map((i) =>				
						<img key={i} src={url[1][i]} />
					)}
				</div>
				<div>
					{Object.keys(url[2]).map((i) =>				
						<img key={i} src={url[2][i]} />
					)}
				</div>
			</ReactSwipe>
		</div>

		const small = <div className="container-img">
				<ReactSwipe ref="swipe" className="carousel" swipeOptions={{continuous: true}}>

	                <div><img style={{width:'100%',height:'auto'}} 
					src={url[current][0]} /></div>

	                <div><img style={{width:'100%',height:'auto'}} 
					src={url[current][1]} /></div>

	                <div><img style={{width:'100%',height:'auto'}} 
					src={url[current][2]} /></div>

	            </ReactSwipe>
		</div>
		return <div className="gallery-big">
			<p>Галерея</p>
			<ul className="nav nav-pills">
			  <li><button onClick={this.handleClickLink.bind(this,'exterior')}>экстерьер</button></li>
			  <li><button onClick={this.handleClickLink.bind(this,'interior')}>интерьер</button></li>
			  <li><button onClick={this.handleClickLink.bind(this,'common_areas')}>общие зоны</button></li>
			</ul>
			{window.screen.width >= 768 ? big : small}
			<div className="gallery-button">
				<button onClick={this.next.bind(this, 0)} id={current == 0 ? 'active' : 'none'}></button>
				<button onClick={this.next.bind(this, 1)} ></button>
				<button onClick={this.next.bind(this, 2)} ></button>
			</div>
		</div>
	}
}