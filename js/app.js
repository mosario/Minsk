import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Main from './main'
import 'normalize.css'
import '../style/style.css'


const App = () => <div>
	<Header />
	<Main />
	</div>

let node = document.getElementById('app')
ReactDOM.render(<App />, node)