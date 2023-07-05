import React from 'react'
import Card from './Card'
import animals from '../animals'

function App() {
    return <div>
        <Card name={animals[0].name} src={animals[0].imgURL}/>
        <Card name={animals[1].name} src={animals[1].imgURL}/>
        <Card name={animals[2].name} src={animals[2].imgURL}/>
    </div>
}

export default App