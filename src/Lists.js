import React from 'react';
import Cards from './Cards.js'

function Lists(props) {
  const myCards = props.cardStore
  const myHeader = props.header
  
  const htmlList = myCards.map(card => {
    return (

          <div class='List-cards'>
            <Cards card={card} />
          </div>

    )
  })
  return htmlList

}
Lists.defaultProps = { cardStore: [] }

export default Lists;
