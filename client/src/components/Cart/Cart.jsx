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
  const { user } = useSelector((state) => state.user)
  const { bouquetsRe } = useSelector((state) => state.bouquetsRe)

  //* Синхронизация состояния корзины и localStorage
  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  
  //* Подсчет общей стоимости корзины
  const total = cart.reduce((sum, el) => sum + el.bouquet.price * el.count, 0)

  //* Отправляем в бд сформированный заказ (доставка)
  const sendOrderDelivery = () => {
    fetch('http://localhost:4000/order/delivery', {
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
        user_id: user.userData.user.id
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
    cart.map(item => fetch('http://localhost:4000/cart/', {
      method: 'POST',
      body: JSON.stringify({ item, id: user.userData.user.id }),
      headers: {
        'Content-Type': 'application/json',
      }
    }))
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
        <input ref={inputTime} de type="time" />
        <input ref={inputDate} type="date" />
        <button onClick={() => console.log()}>[ log ]</button>
        <div>
          <label htmlFor="street">Улица</label>
          <input ref={inputStreet} placeholder="" name="street"/>
        </div>
        <div>
          <label htmlFor="street">Дом</label>
          <input ref={inputHouse} placeholder="" name="house"/>
        </div>
        <div>
          <label htmlFor="street">Квартира</label>
          <input ref={inputApartment} placeholder="" name="apartment"/>
        </div>
      </div>
      }
        <div>Total cost: {total}$</div>
        <button onClick={() => deleteCart()}>Очистить корзину</button>
        <button onClick={() => orderFormation()}>Оплатить</button>
      </div> : 'Корзина пуста'
      }
    </div>
  );
}

export default (Cart);


