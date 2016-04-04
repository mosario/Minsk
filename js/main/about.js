import React, { Component } from 'react'
import { 
	ABOUT_ITEM_TO_METRO,
	ABOUT_ITEM_NATURE,
	ABOUT_ITEM_CONSTRUCT,
	ABOUT_ITEM_EQUIPMENT_ONE,
	ABOUT_ITEM_EQUIPMENT_TWO
} from '../text/main'

const img = (url) => <img src={url} />
const title = (title) => <p id="title">{title}</p>
const text = (text) => <p>{text}</p>

export default class About extends Component{
	render(){
		return <div className="about">
			<p id="title">о бизнес-центре</p>
			<div className="about-item">
				{img('./icons/time.png')}
				<div id="text">
					{title('близость от метро')}
					{text(ABOUT_ITEM_TO_METRO)}
				</div>
			</div>
			<div className="about-item">
				{img('./icons/tree.png')}
				<div id="text">
					{title('природа')}
					{text(ABOUT_ITEM_NATURE)}
				</div>
			</div>
			<div className="about-item">
				{img('./icons/city.png')}
				<div id="text">
					{title('конструкция')}
					{text(ABOUT_ITEM_CONSTRUCT)}
				</div>
			</div>
			<div className="about-item">
				{img('./icons/cogwheel.png')}
				<div id="text">
					{title('техническое оснащение')}
					{text(ABOUT_ITEM_EQUIPMENT_ONE)}
					<p>{ABOUT_ITEM_EQUIPMENT_TWO}</p>
				</div>
			</div>
		</div>
	}
}