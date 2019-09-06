import React from 'react';
import Cards from './Cards.js'

class Lists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myCards: props.appState
    }
    console.log(this.state.myCards)
  }

  checkTask = () => {
    console.log('checked')
  }

  deleteTask = (clickedTask) => {
    const newState = this.state.myCards.filter((titleInState) => {
      if (clickedTask === titleInState.title) {
        console.log('deleted' + clickedTask)
        return false
      }
      return true
    })
    
    this.setState({
      myCards: newState
    })
    console.log(this.state.myCards)
  }

  render() {
    return (
      <div>
        {this.state.myCards.map((card) => {
          return (
            <Cards
              key={card.id}
              title={card.title}
              task={card.task}
              // checked={item.checked}
              handleClick={this.checkTask}
              handleDelete={this.deleteTask} />)
        })}
      </div>
    )
  }
}

// Lists.defaultProps = { cardStore: [] }

export default Lists;
