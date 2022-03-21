import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import { Link } from 'react-router-dom';

import "./Card.css"

function Card({ bouquet }) {
  const [count, setCount] = useState(1);

  return (
    <div className="card-wrapper">
      <Link to={`/card/${bouquet.id}`}>
      <div className="card-box-img">
        <img className="card-img" width="100%" height="100%" src={`http://localhost:4000/${bouquet.img}`} alt="b-main"></img>
      </div>
      </Link>
      <div className='card-info-content'>
        <p className="card-title">{bouquet.title}</p>
        <h4 className="card-description">{bouquet.description}</h4>
        <p className="card-price">{bouquet.price} руб.</p>
      </div>
      <div className="card-button-wrapper">
        <ButtonBuy key={bouquet.id} bouquet={bouquet} />
      </div>
    </div>
  );
}

export default Card;