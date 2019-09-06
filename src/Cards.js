import React from 'react';

class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      card: props
    }
    console.log('state: ' + props)
  }
  render() {
    return (
      <div key={this.state.card.id} className='card' >
        <h3 onClick={() => {
          this.props.handleClick(this.props.title)
        }}>{this.state.card.title}</h3>

        <p>{this.state.card.task}</p>

        <button onClick={() => { this.props.handleDelete(this.props.title) }}>
          Delete
            </button>

      </div >
    )
  }
}

export default Cards;
