import React from 'react'

function Card(props) {
    return <div>
        <h2>{props.name}</h2>
        <img src={props.src}></img>
      </div>
  }

export default Card