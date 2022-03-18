import React, { useState } from 'react';
import ButtonBuy from '../ButtonBuy/ButtonBuy'
import "./Card.css"

function Card({ bouquet }) {
  const [state, setState] = useState(false)
  return (
    <div className="positionRel" onMouseLeave={() => setState(!state)} onMouseEnter={() => setState(!state)}>
      <img src={img} alt="b-main"></img>
      <p>{title}</p>
      <h3>{description}</h3>
       <p>{price}</p>
      <div className="positionAbs">
        {state &&  <ButtonBuy key={url.id} url={url} />}
      </div>
    </div>
  );
}

export default Card;
