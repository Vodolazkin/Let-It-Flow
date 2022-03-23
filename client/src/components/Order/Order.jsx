import axios from 'axios';
import React from 'react';
import OrderList from './OrderList/OrderList'
import CartOrderList from './CartOrderList/CartOrderList';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Order.css'

function Order() {

  const user = useSelector((state) => state.user)
  const [order, setOrder] = useState([])
  const [orderCart, setOrderCart] = useState([])

  useEffect(() => {
    // console.log(user.userData.user.id);
    // fetch('http://localhost:4000/order/', {
    //   method: 'GET',
    //   body: JSON.stringify({ id: user.userData.user.id}),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // })
    console.log(user)
    //**? Сервер возвращает заказы по id (hardcode id)
    axios('http://localhost:4000/order/')
    // .then(({data}) => console.log('эээ',data))
    .then(({data}) => setOrder(data))

    //**? Сервер возвращает корзину по id (hardcode id)
    axios('http://localhost:4000/cart/')
    .then(({data}) => setOrderCart(data))
    
    // .then(({data}) => console.log(data))
    // fetch('http://localhost:4000/order/', {
    //   method: 'GET',
    //   body: JSON.stringify({ id: user?.user.id}),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // })
    // .then(res => res.json())
    // .then(res => setOrder(res))
  }, [])

  return (
    <div className='container-order'>
      <div>
      Ваши заказы:
      <br />
        <>------------------------------------------</>
        {orderCart.map(el => <CartOrderList cart={el} />)}
      </div>

      <div>
        <>------------------------------------------</>
        {order.map(el => <OrderList order={el} />)}
      </div>
    </div>
  );
}

export default Order;
