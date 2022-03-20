import React, { useState } from 'react';
import ButtonBuy from '../ButtonBuy/ButtonBuy'
import "./Card.css"

function Card({ bouquet }) {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(1);

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
      <div className="add_cont">
        <div data-min="1" className="counter">
          <button type="button" onClick={() => setCount(count - 1)} className="minus"></button>
            <input className="counter_input-fild" value={count} id="item_count_1579" />
          <button onClick={() => setCount(count + 1)} className="plus"></button>
        </div>
          <button type="button" className="card-btns" onclick="$.fn.SHOP('buy',1579)">В корзину</button>
      </div>
    </div>
  );
}

export default Card;
