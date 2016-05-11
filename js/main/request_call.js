import React, { Component, findDOMNode } from 'react'
import { REQUEST_CALL } from '../text/main'

const style = {
	error:{
		position: 'relative',
    	top: -30,
    	left: '7%',
    	fontFamily: 'Roboto',
    	color: 'red'
	}
};

export default class RequestCall extends Component{
	constructor(){
		super();
		this.state = {
			error:{
				name: false,
				email: false
			}
		}
	}
	handleClick = () => {
		let name = this.refs.name.value;
		let email = this.refs.email.value;
		let nomber = this.refs.nomber.value;
		let company = this.refs.company.value;
		let message = this.refs.message.value;
		let error = {
			name:'',
			email:''
		}
		name.length < 3 ? error.name = true : error.name = false;
		email.length < 3 ? error.email = true : error.email = false;
		this.setState({error: error});
	}
	render(){
		let error = this.state.error;
		const { order } = this.props;

		const message = 'Здравствуйте, я хотел бы преобрести офис с площадью ' 
			+ order.square + 'кв.м и ' + order.bet + ' ставкой';

		return <div className="request-call">
			<p id="title">Заказать звонок</p>
			<p id="text">{REQUEST_CALL}</p>
			<div className="row">
				<div className="col-md-6">
				
					<input ref="name" style={error.name ? {border: '1px solid red'} : {}} type="text" placeholder="ваше имя..." />
					{error.name ? <span style={style.error}>Имя слишком короткое или не введено вовсе</span> : ''}
					
					<input ref="email" style={error.email ? {border: '1px solid red'} : {}} type="email" placeholder="ваше почта..." />
					{error.email ? <span style={style.error}>E-mail слишком короткий или не введен вовсе</span> : ''}
				
				</div>
				<div className="col-md-6">
					<input ref="nomber" type="text" placeholder="ваш телефон..." />
					<input ref="company" type="text" placeholder="ваше компания..." />
				</div>
				<div className="col-md-12">
					<input ref="message" type="text" 
						placeholder="сообщение..."
						value={Object.keys(order) != '' ? message : ''} />
				</div>
				<div className="request-send">
					<img onClick={::this.handleClick} src="./icons/send.png" />
					<p id="title">Оставить заявку на офис</p>
					<p id="text">Оператор Контакт-центра ответит на Ваш вопрос по e-mail или перезвонит Вам по телефону в течение одного - двух дней. </p>
				</div>
			</div>
		</div>
	}
}