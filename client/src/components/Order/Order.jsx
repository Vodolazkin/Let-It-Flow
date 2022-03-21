import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Order() {

  const user = useSelector((state) => state.user)
  const [state, setState] = useState()

  useEffect(() => {
    // console.log(user.userData.user.id);
    fetch('http://localhost:4000/order', {
      method: 'GET',
      body: JSON.stringify({ id: user.userData.user.id}),
      headers: {
        'Content-Type': 'application/json',
      }
      .then(res => res.json())
      .then(res => console.log(res))
    })
  }, [])
  return (
    <div>
      {/* {state.map()} */}
    </div>
  );
}

export default Order;
