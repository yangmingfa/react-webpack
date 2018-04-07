import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Home from './pages/Home.js'
import './style/index.less'


const root = document.getElementById('root')
const render = Component => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  )
}

render(Home)

if (module.hot) {
  module.hot.accept('./pages/Home.js', () => {
    const NextApp = require('./pages/Home.js').default
    render(NextApp)
  })
}
