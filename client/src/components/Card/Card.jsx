import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ButtonBuy from '../ButtonBuy/ButtonBuy'
import "./Card.css"

function Card({ bouquet }) {
  const [state, setState] = useState(false)
  const cart = useSelector((state) => state.cart)


  // useEffect(() => {
  //   // const ls = window.localStorage
  //     localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart])

  // console.log('state.cart',cart);
  // console.log('state.cart',bouquet);
  
  return (
    <div className="positionRel">
      <img src={bouquet.img} alt="b-main"></img>
      <p>{bouquet.title}</p>
      <h4>{bouquet.description}</h4>
      <p>{bouquet.price}</p>
      <div className="positionAbs">
        <ButtonBuy key={bouquet.id} bouquet={bouquet} />
      </div>
    </div>
  );
}

export default Card;
