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
      <img src={item.bouquet.img} alt="bouquet" />/
      <div>Цена букета: {item.bouquet.price}$</div>
      <div>название: {item.bouquet.title}</div>
      <div>id товара: {item.bouquet.id}</div>
      <button onClick={() => incrementItem(stateId)}>+</button>
      <input value={item.count} readonly />
      <button onClick={() => decrementItem(stateId)}>-</button>
      <button onClick={() => deleteItem(stateId)}>Удалить</button>
    </div>
  );
}

export default Cart_item;
