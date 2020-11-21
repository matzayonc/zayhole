import React, { PureComponent, ReactNode } from 'react'
import './NavBar.sass'


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
			<div className={'navbar'}>
				{this.state.elements.map(el => 
					<a className={'navel'} href={''+el.url}>{el.name}</a>
				)}
			</div>
		)
	}
}

export default Navbar
