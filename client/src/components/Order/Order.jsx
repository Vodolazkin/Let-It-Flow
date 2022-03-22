import axios from 'axios';
import React from 'react';
import OrderList from './OrderList/OrderList'
import CartOrderList from './CartOrderList/CartOrderList';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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
    axios('http://localhost:4000/order/')
    // .then(res => res.json())
    // .then(({data}) => console.log('эээ',data))
    .then(({data}) => setOrder(data))

    axios('http://localhost:4000/cart/')
    .then(({data}) => setOrderCart(data))
    // .then(({data}) => setOrderCart(data))
  }, [])
  return (
    <div>
      Ваши заказы:
      <div></div>
      <>------------------------------------------</>
      {orderCart.map(el => <CartOrderList cart={el} />)}
      <br />
      <>------------------------------------------</>
      {order.map(el => <OrderList order={el} />)}
    </div>
  );
}

export default Order;
