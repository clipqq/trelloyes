import React from 'react';

function Cards(props) {
  // map array of Card objects, generating HTML elements
  const htmlCards = props.cardObjects.map(card => {
    return (
      <div key={card.id} className='card'>
        <h3>{card.title}</h3>
        <p>{card.task}</p>
      </div>
    )
  })

  return htmlCards
}

export default Cards;
