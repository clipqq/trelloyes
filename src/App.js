import React from 'react';
import './App.css';
import Lists from './Lists.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: props.cards
    }
  }

  render() {
    return (
      <div className="App">
        <Lists appState={this.state.cards}  />
      </div>
    )
  }

}


export default App;
