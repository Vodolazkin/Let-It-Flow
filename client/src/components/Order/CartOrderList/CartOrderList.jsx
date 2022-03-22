import React from 'react';

function CartOrderList({cart}) {

  return (
    <div>
      <div>bouquet_id : {cart.bouquet_id}, колличество : {cart.count}</div>
      
    </div>
  );
}

export default CartOrderList;
