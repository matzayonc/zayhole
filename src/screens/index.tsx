import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Index extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <h1>Index</h1>
        )
    }
}

export default Index
