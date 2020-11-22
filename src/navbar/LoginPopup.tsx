import React, { PureComponent, ReactNode } from 'react'

import './LoginPopup.sass'

interface Props {
    children: any
}
interface State {
    visible: boolean
}

class LoginPopup extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    toggle(){
        console.log('toggle')
        this.setState({visible: !this.state.visible})
    }

    render(): ReactNode {
        return (
            <a className={'login-toggle'} onClick={this.toggle.bind(this)}>
                {this.props.children}
                <div className={'login-popup'+(this.state.visible ? '' : '-hidden')}></div>
            </a>
        )
    }
}

export default LoginPopup
