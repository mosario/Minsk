import React, { Component } from 'react'
import { REQUEST_CALL } from '../text/main'

export default class RequestCall extends Component{
	render(){
		return <div className="request-call">
			<p id="title">Заказать звонок</p>
			<p id="text">{REQUEST_CALL}</p>
			<div className="row">
				<div className="col-md-6">
					<input type="text" placeholder="ваше имя..." />
					<input type="text" placeholder="ваше почта..." />
				</div>
				<div className="col-md-6">
					<input type="text" placeholder="ваш телефон..." />
					<input type="text" placeholder="ваше компания..." />
				</div>
				<div className="col-md-12">
					<input type="text" placeholder="сообщение..." />
				</div>
				<div className="request-send">
					<img src="./icons/send.png" />
					<p id="title">Оставить заявку на офис</p>
					<p id="text">Оператор Контакт-центра ответит на Ваш вопрос по e-mail или перезвонит Вам по телефону в течение одного - двух дней. </p>
				</div>
			</div>
		</div>
	}
}