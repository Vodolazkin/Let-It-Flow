import React, { useState } from 'react';
import ButtonBuy from '../ButtonBuy/ButtonBuy'
import "./Card.css"

function Card({ bouquet }) {
  const [state, setState] = useState(false)
  return (
    <div className="positionRel" onMouseLeave={() => setState(!state)} onMouseEnter={() => setState(!state)}>
      <img src={bouquet.img} alt="b-main"></img>
      <p>{bouquet.title}</p>
      <h4>{bouquet.description}</h4>
       <p>{bouquet.price}</p>
      <div className="positionAbs">
        {state &&  <ButtonBuy key={bouquet.id} bouquet={bouquet} />}
      </div>
    </div>
  );
}

export default Card;
