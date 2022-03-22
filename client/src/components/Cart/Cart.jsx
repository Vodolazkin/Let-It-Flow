import React from 'react';
import axios from 'axios';
import './Cart.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Cart_item from '../Cart_item/Cart_item';
import { clearCart, initCart } from '../../redux/actionCreate/userActionCreate'
import { useRef } from 'react';


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
        user_id: user.userData.user.id
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
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
      body: JSON.stringify({ item, id: user.userData.user.id }),
      // body: JSON.stringify({ item, id: user.userData.user.id }),
      headers: {
        'Content-Type': 'application/json',
      }
    }))
  }


  return (
    <div className='container divider'>
      <h2>Ваша корзина { !cart.length && 'пуста'}</h2>
      <div className='wrapper'>
        <div>
          <div className='cart_item-list'>
            {cart ? cart.map((elem) => <Cart_item key={elem.bouquet.id} item={elem}/>) : 'Корзина пуста'}
          </div>
        </div>

        { cart.length >= 1 &&
             
        <div>
             <h3>Выберите способ доставки</h3>
          {/* <select onClick={({target}) => setMethod(target.value)} name="method-delivery">
            <option value="pickup">Самовывоз</option>
            <option value="delivery">Доставка</option>
          </select> */}
        <div className="container-method">
          <div onClick={() => setMethod(0)}>Доставка</div>
          <div onClick={() => setMethod(1)}>Самовывоз</div>
        </div>
          
        {method === 0 && 
        <div className="container-delivery">
          <input ref={inputTime} type="time" />
          <input ref={inputDate} type="date" />
          <div className="card-input">
            <label htmlFor="street" className="card-input__label">Улица</label>
            <input className='card-input__input ' ref={inputStreet} placeholder="" name="street" />
          </div>
          <div className="card-input">
            <label htmlFor="street" className="card-input__label">Дом</label>
            <input className='card-input__input ' ref={inputStreet} placeholder="" name="street" />
            <input ref={inputHouse} placeholder="" name="house" className="card-input__input" />
          </div>
          <div>
            <label htmlFor="street">Квартира</label>
            <input ref={inputApartment} placeholder="" name="apartment"/>
          </div>
        </div>
        }
        <div>Сумма заказа</div>
        <h3>{total}$</h3>
        <div className='nowrapper'>
          <button className="white-btn" onClick={() => deleteCart()}>Очистить корзину</button>
          <button  className="btn" onClick={() => orderFormation()}>Оплатить</button>
          {/* <button  className="btn" onClick={() => console.log(user.userData.user.id)}>Ордер</button> */}
          <button  className="btn" onClick={() => sendOrderDelivery()}>Ордер</button>
        </div>
      </div>}
     </div>
    </div>
  );
}

export default (Cart);


