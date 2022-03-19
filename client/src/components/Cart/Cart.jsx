import React from 'react';
import axios from 'axios';
import './Cart.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { JSON } from 'sequelize/lib/data-types';
import Cart_item from '../Cart_item/Cart_item';


function Cart() {

  const [method, setMethod] = useState('')
  const [stateCart, setItem] = useState('')

  const cart = useSelector((state) => state.cart) 

  // useEffect(() => {
  //  const ls = window.localStorage
  //  if(!ls) {
  //    ls.setItem('cart', JSON.stringify(cart))
  //  }
  //   ls.removeItem('cart', JSON.stringify(cart))

  // }, [cart])
 

  //* Отправляем в бд сформированный заказ
  const sendOrder = () => {
    fetch('http://localhost:4000/order', {
      method: 'POST',
      body: JSON.stringify({ method,  }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  return (
    <div>
      //* При нажатии на кнопку купить, данные из карточки переходят в корзину (в div ниже)
      <div>{}</div>
      <select onClick={(event) => setMethod(event.target.value)} name="method-delivery">
        <option value="pickup">Самовывоз</option>
        <option value="delivery">Доставка</option>
      </select>
     {stateCart.map((elem) => <Cart_item key={elem.id} elem={elem} />)  }
      
      <button onClick={() => sendOrder()} >Оплатить</button>
    </div>
  );
}

export default Cart;
