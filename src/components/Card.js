import React from 'react'

function Card({cards}) {
  //console.log(cards)
  const cardItems = cards.map((card) =>
    <div className="card" key={card.id}>
      <img className="front" src={card.src} alt="card front" />
      <img className="back" src="/img/cover.png" alt="card back" />
    </div>
  )

  return (
    <div className="card-grid">
      {cardItems}
    </div>
  )
}

export default Card

// {cards.map(card => (
//   <div className="card" key={card.id}>
//     <div>
//       <img className="front" src={card.src} alt="card front" />
//       <img className="back" src="/img/cover.png" alt="card back" />
//     </div>
//   </div>
// ))}