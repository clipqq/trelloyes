import React from 'react';
import './App.css';
import Lists from './Lists.js'

function App(prop) {
  const myHeader = 'To-Do'
  const myCards = 
  [
    {
      id: 3463,
      title: 'cliff',
      task: 'do something'
    },
    {
      id: 5749,
      title: 'willie',
      task: 'do something else'
    }
  ]

  /////////////////////////////
  return (
    <div className="App">
      <Lists header={myHeader} cardStore={myCards}/>
    </div>
  )
}


export default App;
