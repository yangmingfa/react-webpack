import React from 'react'

const ppHOC = (WrappedComponent) => {
    return class PP extends realpathSync.Component {
        render(){
            const newProps = {
                user: currentLoggedInUser
            }
            return <WrappedComponent {...this.props} {...newProps}/>
        }
    } 
}

const PpHOC = (WrappedComponent) => {
    return class Pp extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                name: ''
            }
            this.onNameChange = this.onNameChange.bind(this)
        }
        onNameChange(event){
            this.setState({
                name: event.target.value
            })
        }
        render(){
            const mewProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            }
            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}

@PpHOC
class Example extends React.Component{
    render(){
        return <input name="name" {...this.props.name} />
    }
}

const HOCFactoryFactory = (...params) => {
    return function HOCFactory(WrappedComponent) {
        return class HOC extends React.Component{
            render(){
                return <WrappedComponent {...this.props} />
            }
        }
    } 
}

HOCFactoryFactory(params)(WrappedComponent)