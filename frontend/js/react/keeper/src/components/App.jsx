import React from 'react'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import notes from '../notes'

function createNotes(noteItem) {
    return <Note title={noteItem.title} content={noteItem.content}/>
}

function App() {
    return (
        <div>
            <Header />
            {notes.map(noteItem =>
            <Note
                title={noteItem.title}
                content={noteItem.content}
            />)}
            <Footer />
        </div>
    )
}

export default App