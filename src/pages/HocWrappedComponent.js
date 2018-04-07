import React from 'react'

// const withPersistentData = (WrappedComponent) => {
//     return class extends React.Component{
//         componentWillMount(){
//             let data = localStorage.getItem('data')
//             this.setState({data})
//         }

//         render() {
//             return <WrappedComponent data={this.state.data} {...this.props}/>
//         }
//     }
// }

// class MyComponent2 extends React.Component {
//     render() {
//         return <div>{this.props.data}</div>
//     }
// }

// const MyComponentWithPerSistentData = withPersistentData(MyComponent2)

// const withPersistentData = (key) => (WrappedComponent) => {
//     return class extends React.Component{
//         componentWillMount() {
//             let data = localStorage.getItem(key)
//             this.setState({data})
//         }
//         render() {
//             return <WrappedComponent data={this.state.data} {...this.props}/>
//         }
//     }
// }

// class MyComponent2 extends React.Component {
//     render() {
//         return <div>{this.props.data}</div>
//     }
// }

// const MyComponentWithPerSistentData = withPersistentData('data')(MyComponent2)

class Usual extends React.Component {
    constructor() {
        super()
        this.state = {
            usual: 'usual',
        }
    }

    componentDidMount(){
        console.log('didMount')
    }

    render() {
        return (
            <div>Usual</div>
        )
    }
}

const addFun = WrappedComponent => class extends React.Component{
    handleClick(){
        console.log('click')
    }
    render() {
        const props = {
            ...this.props,
            handleClick: this.handleClick,
        }
        return <WrappedComponent {...props} />
    }
}

const addStyle = WrappedComponent => class extends React.Component{
    render() {
        return (
            <div style={{color: 'red'}}>
                <WrappedComponent {...this.props} />
            </div>
        )
    }
}

const WrappedComponent = addStyle(addFun(Usual))

class WrappedUsual extends React.Component {
    render() {
        console.log(this.props, 'props')
        return (
            <div>
                <WrappedComponent />
            </div>
        )
    }
}