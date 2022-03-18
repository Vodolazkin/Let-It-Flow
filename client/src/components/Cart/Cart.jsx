import React from 'react';
import { useState } from 'react';
import './Cart.css'


function Cart() {

  const [method, setMethod ] = useState('')

  return (
    <div>
      <div></div>
      <select onClick={(event) => setMethod(event.target.value)} name="method-delivery">
        <option value="pickup">Самовывоз</option>
        <option value="delivery">Доставка</option>
      </select>
      <button></button>
    </div>
  );
}

export default Cart;
