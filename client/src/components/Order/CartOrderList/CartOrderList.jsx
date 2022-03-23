import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function CartOrderList({cart}) {

  const [bouquet, setBouquet] = useState('')

useEffect(() => {
  fetch('http://localhost:4000/cart/bouquet', {
    method: 'POST',
    body: JSON.stringify({ id : cart.bouquet_id }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(res => setBouquet(res.bouquet))

}, [])

  return (
    <div>
      <div>{bouquet.title} <br /><img width="100" src={`http://localhost:4000/${bouquet.img}`} alt="dsa" /><br /> колличество : {cart.count}</div>
      <>-----------------</>
    </div>
  );
}

export default CartOrderList;
