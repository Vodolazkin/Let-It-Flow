import React from 'react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/actionCreate/userActionCreate'
// import "./ButtonBuy.css";

function ButtonBuy({ bouquet }) {

  const dispatch = useDispatch()
  const inputValue = useRef()
  const cart = useSelector((state) => state.cart)
  const [count, setCount] = useState(1)
  const { bouquetsRe } = useSelector((state) => state.bouquetsRe)

  const handleCart = () => {

    dispatch(addItemToCart({
       bouquet,
       count : +inputValue.current.value
      }
    ))
  }


  return (
    <div>
      <div data-min="1" className="counter">
        <button className="minus" type="button" onClick={() => ( count >= 2 ? setCount(count - 1) : setCount(count))}>-</button>
          <input className="counter_input-fild" ref={inputValue} value={count} id="item_count_1579" />
        <button className="plus" type="button" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button className="card-btns" onClick={() => handleCart()}>В корзину</button>
    </div>
  );
}

export default ButtonBuy;
