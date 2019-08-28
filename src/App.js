import React from 'react';
import './App.css';
import Lists from './Lists.js'

function App(props) {

  const testTitle = 'To-Do'
  const testCards =
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
      <Lists header={testTitle} cardStore={testCards}/>
    </div>
  )
}


export default App;
