import React, { PureComponent, ReactNode } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './NavBar.sass'

import Index from '../screens/index'
import About from '../screens/about'



interface Props {}
interface State {
	elements: NavElement[]
}

interface NavElement {
	name: String
	url: String
}


const links : NavElement[] = [
	{name: 'First', url:'localhost:8080'},
	{name: 'Second', url:'localhost:8080'},
	{name: 'Third', url:'localhost:8080'}
]


class Navbar extends PureComponent<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			elements: links
		}
	}

	render(): ReactNode {
		return (
			<Router>
				<nav>
					<div className={'navbar'}>
						<Link className='navel' to='/'>Home</Link>
						<Link className='navel' to='/about'>About</Link>
					</div>
					<div className={'login'} />
				</nav>


				<Route path="/" exact component={Index} />
				<Route path="/about" component={About} />

			</Router>		
		)
	}
}

export default Navbar
