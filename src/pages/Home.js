import React from 'react'
import Usual from './es6'
import Login from './Login'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    add() {
        this.setState((preState) => {
            return{
                count: preState.count + 1
            }
        })
    }

    sub() {
        this.setState((preState) => {
            return{
                count: preState.count - 1
            }
        })
    }

    render() {
        return(
            <div className="container">
                <h1>{this.state.count}</h1>
                <button onClick={() => this.add()}>count+1</button>
                <br/>
                <button onClick={() => this.sub()}>count-1</button>
                <h1>Hello, React</h1>
                <Usual />
                <Login />
            </div>  
        ) 
    }
}