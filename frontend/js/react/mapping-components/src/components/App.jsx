import React from "react";
import Entry from './Entry'
import emojipedia from '../emojipedia'

function App() {
  return <div>    
    <dl className="dictionary">
      {emojipedia.map(emojipedia => {
        <Entry
          key={emojipedia.id}
          emoji={emojipedia.emoji}
          name={emojipedia.name}
          meaning={emojipedia.meaning}
        />
      })}
    </dl>
  </div>
}

export default App;
