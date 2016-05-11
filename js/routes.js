import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import Header from './header'
import App from './app'
import Main from './main'
import Rent from './rent'
import Sale from './sale'
import About from './about'
import Contacts from './contact' 

export const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="/rent" component={Rent}/>
      <Route path="/sale" component={Sale}/>
      <Route path="/about" component={About}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="main" component={Main}/>
      <Route path='*' component={Main} />
    </Route>
  </div>
)