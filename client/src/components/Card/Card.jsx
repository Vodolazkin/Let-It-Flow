import React, { useState } from 'react';
import ButtonBuy from '../ButtonBuy/ButtonBuy'
import "./Card.css"

function Card({ bouquet }) {
  const [state, setState] = useState(false)
  return (
    <div className="card-wrapper positionRel" onMouseLeave={() => setState(!state)} onMouseEnter={() => setState(!state)}>
      <div className="card-box-img">
        <img className="card-img" width="100%" height="100%" src={`http://localhost:4000/${bouquet.img}` }alt="b-main"></img>
      </div>
      <p className="card-title">{bouquet.title}</p>
      <h4 className="card-description">{bouquet.description}</h4>
       <p className="card-price">{bouquet.price} руб.</p>
      <div className="card-button-wrapper positionAbs">
        {state &&  <ButtonBuy key={bouquet.id} bouquet={bouquet} />}
      </div>
    </div>
  );
}

export default Card;
