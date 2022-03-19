import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Card from "../Card/Card"

function Category(props) {
const { bouquetsRe } = useSelector((state) => state)
const dispatch = useDispatch()
const { id } = useParams()
console.log(id)

  useEffect(() =>{
  fetch(`http://localhost:4000/categories/${id}`)
  .then(res => res.json())
  .then(data => dispatch({ type: 'INIT_CATEGORY_BOUQUETS', payload: data}))
  .catch(err=>console.log(err));
 },[])


//  useEffect(() =>{
//   fetch(`http://localhost:4000/categories/${id}`)
//   .then(data => console.log(data));
//  },[])


  return (
      <div>
     {bouquetsRe.map((bouquet) => <Card key={bouquet.id} bouquet={bouquet}/>)}
    </div>
  );
}

export default Category;
