import React from 'react'
import Card from './Card'
import animals from '../animals'

function createCard(animal) {
    return <Card
        key={animal.id}
        name={animal.name}
        img={animal.imgURL}
    />
}

function App() {
    return <div>
        {animals.map(createCard)}
    </div>
}

export default App