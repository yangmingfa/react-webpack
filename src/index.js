import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Home from './pages/Home.js'
import './style/index.less'


ReactDom.render(
    <AppContainer>
        <Home />
    </AppContainer>,
    document.getElementById('root')
)
if(module.hot){
    module.hot.accept(() => {
        ReactDom.render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}