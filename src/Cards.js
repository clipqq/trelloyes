import React from 'react';

function Cards(props) {
  const card = props.card
  return (
    <div key={card.id} className='card'>
      <h3>{card.title}</h3>
      <p>{card.task}</p>
    </div>
  )
}

export default Cards;
