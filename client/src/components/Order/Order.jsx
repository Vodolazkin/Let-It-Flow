import axios from 'axios';
import { axiosWithConfig } from '../../utils/axios';
import React from 'react';
import OrderList from './OrderList/OrderList'
import CartOrderList from './CartOrderList/CartOrderList';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Order.css'
import { login } from '../../redux/actionCreate/userActionCreate';

function Order() {
  
  const [order, setOrder] = useState([])
  const [orderCart, setOrderCart] = useState([])
  const { user } = useSelector((state) => state)
 


  useEffect(() => {
    // fetch('http://localhost:4000/order/', {
    //   method: 'GET',
    //   body: JSON.stringify({ id: user?.user.id}),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // })
    //**? Сервер возвращает заказы по id (hardcode id)
    axios(`http://localhost:4000/order/${user?.user.id}`)
    .then(({data}) => setOrder(data))

    // axiosWithConfig.post(`order/`, {id: user?.user.id})
    // .then(({data}) => console.log('эээ',data))

    // fetch('http://localhost:4000/order/', {
    //   method: 'POST',
    //   body: JSON.stringify({ id: user?.user.id}),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // })
    // .then(res => res.json())
    // .then(res => setOrder(res))
    // .then(res => console.log(res))

    //**? Сервер возвращает корзину по id (hardcode id)
    axios('http://localhost:4000/cart/')
    .then(({data}) => setOrderCart(data))
    
    // .then(({data}) => console.log(data))
  }, [])

  // console.log('1',orderCart);
  // console.log('2',orderCart);
  return (
    <div className='container-order'>
      <div>
     <div className='order-title'>Ваши заказы:</div>
      <br />
        {order && order?.map(el => (
          <div className='cart-order-list'>
            <OrderList order={el} cart={orderCart.filter(cart => cart?.uuid === el?.uuid)} />

          </div>
      )
        )}
      </div>
    </div>
  );
}

export default Order;
