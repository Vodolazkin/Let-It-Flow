import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function Card(props) {
  // const { bouquetsRe } = useSelector((state) => state)
  
  const dispatch = useDispatch()
useEffect(() =>{
fetch('http://localhost:4000/bouquets')
.then(res => res.json())
// .then(data => dispatch({ type: 'INIT_BOUQUETS', payload: data}))
.then(data => console.log(data))
.catch(err=>console.log(err));
},[])
  return (
    <div>
     {/* {bouquetsRe.map(bouquet => (

     ))} */}
    </div>
  );
}

export default Card;
