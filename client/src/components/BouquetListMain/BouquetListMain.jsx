import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from "../Card/Card"
import  './BouquetListMain.css'
function BouquetListMain(props) {
  const { bouquetsRe } = useSelector((state) => state)
  const dispatch = useDispatch()

   useEffect(() =>{
   fetch('http://localhost:4000/bouquets')
   .then(res => res.json())
   .then(data => dispatch({ type: 'INIT_BOUQUETS', payload: data}))
   .catch(err=>console.log(err));
},[dispatch])

  return (
    <div>
     {bouquetsRe.map((bouquet) => <Card key={bouquet.id} bouquet={bouquet}/>)}
    </div>
  );
}

export default BouquetListMain;

