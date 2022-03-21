import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ButtonBuy from '../ButtonBuy/ButtonBuy';

import "./CardPage.css"

function CardPage({ bouquet }) {
  const [state, setState] = useState(false);
  // const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const {id} = useParams()

  const { cardR } = useSelector((state) => state.cardR);

  useEffect(() =>{
    fetch(`http://localhost:4000/card/${id}`)
    .then(res => res.json())
    .then(data => dispatch({ type: 'ONE_CARD', payload: data}))
    .catch(err=>console.log(err));
 },[dispatch])

  return (
    <div className="card-wrapper">
      <div className="card-box-img">
        <img className="card-img" width="100%" height="100%" src={`http://localhost:4000/${cardR.img}`} alt="b-main"></img>
      </div>
      <p className="card-title">{cardR.title}</p>
      <h4 className="card-description">{cardR.description}</h4>
      <p className="card-price">{cardR.price} руб.</p>
      <div className="card-button-wrapper">
        {state &&  <ButtonBuy key={bouquet.id} bouquet={bouquet} />}
      </div>
    </div>
  );
}

export default CardPage;