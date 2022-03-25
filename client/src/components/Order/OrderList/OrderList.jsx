import React from 'react';
import './OrderList.css'
import CartOrderList from '../CartOrderList/CartOrderList';


function OrderList({ order, cart }) {


  // console.log(order);
  return (
    <>
    <ul className="cart-order-item">
      <li className="cart-order-item-el">Номер заказа: <span className='uuid'>{order?.uuid.slice(-5)}</span></li>
      <li className="cart-order-item-el">Дата доставки: {(order.delivery_date).slice(0,10)}</li>
      <li className="cart-order-item-el">Время: {order.delivery_time}</li>
      <li className="cart-order-item-el">Адрес:</li>
      <li className="cart-order-item-el">Улица: {order.delivery_street}</li>
      <li className="cart-order-item-el">Дом: {order.delivery_house}</li>
      <li className="cart-order-item-el">Квартира: {order.delivery_apartment}</li>
    </ul>
    {cart.map(el => <CartOrderList cart={el}  />)}
    </>

  );
}

export default OrderList;
