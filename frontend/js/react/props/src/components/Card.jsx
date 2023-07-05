import React from 'react'

function Card(props) {
    return <div>
        <h2>{props.name}</h2>
        <img src={props.img} alt=''></img>
      </div>
  }

export default Card