import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AdminCard from '../AdminCard/AdminCard'
import AddCard from "../AddCard/AddCard";


export default function AdminBoard() {

  const dispatch = useDispatch()
  const { bouquets } = useSelector((state) => state)

  useEffect(() => {
   fetch('http://localhost:4000/bouquets')
    .then(res => res.json())
    .then(data => dispatch({ type: 'INIT_BOUQUETS', payload: data}))
    .catch(err=>console.log(err));
  }, [])

  return (
    <div className="container divider">
      <div className="nowrapper">
        <AddCard />
        <div className="calendar">
        <div className='card-box'>
            {bouquets?.map((bouquet) => <AdminCard key={bouquet.id} bouquet={bouquet} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
