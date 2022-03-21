import React from 'react';
import axios from 'axios';
import './Cart.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Cart_item from '../Cart_item/Cart_item';
import { clearCart, initCart } from '../../redux/actionCreate/userActionCreate'


function Cart() {

  const dispatch = useDispatch()

  const [method, setMethod] = useState('')
  const { cart } = useSelector((state) => state.cart)
  const { bouquetsRe } = useSelector((state) => state.bouquetsRe)


  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  
  //* Подсчет общей стоимости корзины
  const total = cart.reduce((sum, el) => sum + el.bouquet.price * el.count, 0)

  //* Отправляем в бд сформированный заказ
  const sendOrder = () => {
    fetch('http://localhost:4000/order', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
  
  const deleteCart = () => {
    dispatch(clearCart())
  }

  return (
    <div>
      <div className='cart-header'>Ваша корзина</div>
      <div>Проверим наличие цветов, на выбранную дату.</div>
      <div className='cart_item-list'>
        {cart ? cart.map((elem) => <Cart_item key={elem.bouquet.id} item={elem}/>) : 'Корзина пуста'}
      </div>
      { cart.length >= 1 ?
      <div>
        <select onClick={({target}) => setMethod(target.value)} name="method-delivery">
          <option value="pickup">Самовывоз</option>
          <option value="delivery">Доставка</option>
        </select>
        
      {method === 'delivery' && 
      <div>
        <input type="time" />
        <input />
        <input />
      </div>
      }
        <div>Total cost: {total}$</div>
        <button onClick={() => deleteCart()}>Очистить корзину</button>
        <button onClick={() => sendOrder()}>Оплатить</button>
      </div> : 'Корзина пуста'
      }
    </div>
  );
}

export default (Cart);


