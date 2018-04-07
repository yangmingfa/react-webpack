// var loggedObj = new Proxy(obj, {
//     get(target, name) {
//         console.log('get', target, name)
//         return Reflect.get(target,name)
//     },
//     deleteProperty(target, name) {
//         console.log('delete' + name)
//         return Reflect.deleteProperty(target, name)
//     },
//     has(target, name) {
//         console.log('has' + name)
//         return Reflect.has(target, name)
//     }
// })


import React, { Component } from 'react'

// class Usual extends Component {
//     render() {
//         console.log(this.props, 'props')
//         return (
//             <div>Usual 
//                 <button onClick={() => this.props.handleClick()}>打印</button>
//             </div>
//         )
//     }
// }

// 简单的高阶组件

// const simpleHoc = WrappedComponent => {
//     console.log('simpleHoc')
//     return class extends Component {
//         render() {
//             return <WrappedComponent {...this.props} />>
//         }
//     }
// }

// export default simpleHoc(Usual)

// 属性代理

// const propsProcyHoc = WrappedComponent => class extends Component {
//     componentDidMount() {
//         console.log(this.instanceComponent, 'instanceComponent')
//     }

//     handleClick() {
//         console.log('属性代理')
//     }
    
//     render() {
//         return (
//             <WrappedComponent 
//                 {...this.props}  
//                 handleClick={this.handleClick}
//                 ref={instanceComponent => this.instanceComponent = instanceComponent}
//                  />
//         )
//     }
// }

// export default propsProcyHoc(Usual)



class Usual extends Component {
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

// 反向继承

// const iiHoc = WrappedComponent => class extends WrappedComponent {
//     render() {
//         console.log(this.state, 'state => 继承')
//         return super.render()
//     }
// }

// export default iiHoc(Usual)

// 渲染劫持

import hijackRenderHoc from './hijack-hoc'

export default hijackRenderHoc({type: 'add-style', style: { color: 'blue' }})(Usual)