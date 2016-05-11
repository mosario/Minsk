import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'

import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Router, Route, browserHistory, hashHistory, Redirect, IndexRedirect, IndexRoute } from 'react-router'

import Header from './header'
import Main from './main'
import Rent from './rent'
import Sale from './sale'
import About from './about'
import Contacts from './contact'
import Footer from './footer'

import 'normalize.css'
import '../style/style.css'

export default class App extends Component{
	render(){
		return <div>
		<Header />
		{this.props.children}
		<Footer />
		</div>
	}
}

let node = document.getElementById('app')
render((
  <Router history={browserHistory}>
    <Route path="/minsk/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/minsk/rent" component={Rent}/>
      <Route path="/minsk/sale" component={Sale}/>
      <Route path="/minsk/about" component={About}/>
      <Route path="/minsk/contacts" component={Contacts}/>
      <Route path="main" component={Main}/>
    	<Redirect from="*" to="main" />
      <Route path='*' component={app} />
    </Route>
  </Router>
), node)