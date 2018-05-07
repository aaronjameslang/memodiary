import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const {
  commithash,
  dirty,
  time
} = memodiary.build

console.log(
  'Version %s built %s',
  commithash +
  (dirty ? '+' : ''),
  Date(time).toString()
)

const app = document.createElement('div')
document.body.appendChild(app);

([document.documentElement, document.body, app]).forEach(e => { e.style.height = '100%' })

ReactDOM.render(React.createElement(App), app)
