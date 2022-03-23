import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Cart_item from '../Cart_item/Cart_item';
import { clearCart, initCart } from '../../redux/actionCreate/userActionCreate'
import { useRef } from 'react';

import './Cart.css'



function Cart() {

  const dispatch = useDispatch();

  const inputTime = useRef();
  const inputDate = useRef();
  const inputStreet = useRef();
  const inputHouse = useRef();
  const inputApartment = useRef();

  const [method, setMethod] = useState(false)
  const { cart } = useSelector((state) => state.cart)
  const user = useSelector((state) => state.user)
  const { bouquetsRe } = useSelector((state) => state.bouquetsRe)
  // const user = useSelector((state) => state.user)


  //* Синхронизация состояния корзины и localStorage
  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  
  //* Подсчет общей стоимости корзины
  const total = cart.reduce((sum, el) => sum + el.bouquet.price * el.count, 0)

  //* Отправляем в бд сформированный заказ (доставка)
  const sendOrderDelivery = () => {
    fetch('http://localhost:4000/order/', {
      method: 'POST',
      body: JSON.stringify({
        time: inputTime.current.value,
        date: inputDate.current.value,
        street: inputStreet.current.value,
        house: inputHouse.current.value,
        apartment: inputApartment.current.value,
        user_id: user.user.id
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    // console.log(user.user.id);
  }
  const sendOrderPickup = () => {
    fetch('http://localhost:4000/order/pickup', {
      method: 'POST',
      body: JSON.stringify({
        time: inputTime.current.value,
        date: inputDate.current.value,
        // user_id: user.userData.user.id
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
  
  //* Очистка корзины
  const deleteCart = () => {
    dispatch(clearCart())
  }

  //* заполняем таблицу Cart, по каждому айтему в корзине
  const orderFormation = () => {
    cart.map(item => fetch('http://localhost:4000/cart', {
      method: 'POST',
      body: JSON.stringify({ item, id: user.user.id }),
      // body: JSON.stringify({ item, id: user.userData.user.id }),
      headers: {
        'Content-Type': 'application/json',
      }
    }))
  }


  return (
    <div className='container'>
      <h2 className='cart-header'>Ваша корзина { !cart.length && 'пуста'}</h2>
      <div className='cart-container'>
        <div className='cart-list-wrapper'>
          <div className='cart_item-list'>
            {cart ? cart.map((elem) =>
             <Cart_item key={elem.bouquet.id} item={elem}/>) : 'Корзина пуста'}
          </div>
          {cart.length > 0 && <button className='cart-btn-clear' onClick={() => deleteCart()}>Очистить корзину</button>}
        </div>

        { cart.length >= 1 &&
             
        <div className='cart-wrapper'>
             <h3 className='cart-delivery-title'>Выберите способ доставки</h3>
          {/* <select onClick={({target}) => setMethod(target.value)} name="method-delivery">
            <option value="pickup">Самовывоз</option>
            <option value="delivery">Доставка</option>
          </select> */}
        <div className="cart-delivery-method-box">
          <div className="cart-delivery-method" onClick={() => setMethod(0)}>Доставка</div>
          <div className="cart-delivery-method" onClick={() => setMethod(1)}>Самовывоз</div>
        </div>
          
        {method === 0 && 
        <div className="cart-box-delivery">
          <div className="cart-delivery-time-date">
          <input className="cart-delivery-time" ref={inputTime} type="time" autoComplete='off'/>
          <input className="cart-delivery-date" ref={inputDate} type="date" autoComplete='off'/>
          </div>

          <div className="cart-delivery-fild">
            <label htmlFor="street" className="cart-delivery-label">Улица</label>
            <input className='cart-delivery-fild-street' id="street" ref={inputStreet} placeholder="" name="street" autoComplete='off'/>
          </div>

          <div className="cart-delivery-fild">
            <label htmlFor="house" className="cart-delivery-label">Дом</label>
            <input className='cart-delivery-fild-house' id="house" ref={inputHouse} placeholder="" name="house" autoComplete='off'/>
          </div>

          <div className="cart-delivery-fild">
            <label htmlFor="apartment" className="cart-delivery-label">Квартира</label>
            <input className='cart-delivery-fild-apartment' ref={inputApartment} placeholder="" id="apartment" name="apartment" autoComplete='off'/>
          </div>
        </div>
        }
        <div className="cart-summ-order-title">Сумма заказа</div>

        <h3 className="cart-summ-order">{total}$</h3>

        <div className='cart-btns-box'>
          <button className='cart-btn-pay' onClick={() => orderFormation()}>Оплатить</button>
          {/* <button  className="btn" onClick={() => console.log(user.userData.user.id)}>Ордер</button> */}
          <button  className='cart-btn-order' onClick={() => sendOrderDelivery()}>Заказать</button>
        </div>
      </div>}
     </div>
    </div>
  );
}

export default (Cart);


