import React from 'react';
import './Cart_item.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  incrementItemToCart, 
  decrementItemToCart, 
  DeleteItemToCart } from '../../redux/actionCreate/userActionCreate'

function Cart_item({ item }) {

  const dispatch = useDispatch()
  const [stateId, setId] = useState()

  useEffect(()=> {
    setId(item.bouquet.id)
  },[])



  const incrementItem = (id) => {
    dispatch(incrementItemToCart(id))
  }

  const decrementItem = (id) => {
    dispatch(decrementItemToCart(id))
  }
  const deleteItem = (id) => {
    dispatch(DeleteItemToCart(id))
  }

  console.log('cart_item444441111', item);

  return (
    <div className='cart-item-card'>

      <div className='cart-item-card-img-box'>
        <img className='cart-item-card-img' src={`http://localhost:4000/${item.bouquet.img}`} alt="bouquet" />
      </div>

      <div className='cart-item-card-content'>
        <div className='cart-item-card--name'>{item.bouquet.title}</div>
        <div className='cart-item-card--price'>{item.bouquet.price}$</div>
        <div className='cart-item-card--id'>id товара: {item.bouquet.id}</div>

        <div className='cart-item-btn-box'>
          <button className='cart-item-btn--minus' onClick={() => decrementItem(stateId)}></button>
          <input className='cart-item-btn--input' value={item.count} readonly />
          <button className='cart-item-btn--plus' onClick={() => incrementItem(stateId)}></button>
        </div>

      </div>

      <button onClick={() => deleteItem(stateId)}>Удалить</button>
    </div>
  );
}

export default Cart_item;
