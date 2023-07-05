import React from 'react'
import ReactDOM from 'react-dom'

const customStyle = {color: 'red'}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello, world!</h1>
    <p>Lorem ipsum dolor upset.</p>
  </div>,
  document.getElementById('root')
)
