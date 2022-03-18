import React from 'react';
import './Cart.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function Cart() {

  const [method, setMethod ] = useState('')
  const [stateCa, setItem] = useState('')

  useEffect(() => {
   
  }, [method])

  return (
    <div>
      //* При нажатии на кнопку купить, данные из карточки переходят в корзину (в div ниже)
      <div>{}</div>
      <select onClick={(event) => setMethod(event.target.value)} name="method-delivery">
        <option value="pickup">Самовывоз</option>
        <option value="delivery">Доставка</option>
      </select>

      <button>Оплатить</button>
    </div>
  );
}

export default Cart;
