import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import logBuildInfo from './logBuildInfo'

logBuildInfo()

const app = document.createElement('div')
document.body.appendChild(app);

([document.documentElement, document.body, app]).forEach(e => { e.style.height = '100%' })

ReactDOM.render(React.createElement(App), app)
