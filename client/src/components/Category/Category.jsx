import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Card from "../Card/Card"

function Category(props) {
const { bouquetsRe, categoriesR  } = useSelector((state) => state)

const dispatch = useDispatch()
const { id } = useParams()


  useEffect(() =>{
  fetch(`http://localhost:4000/categories/${id}`)
  .then(res => res.json())
  .then(data => dispatch({ type: 'INIT_CATEGORY_BOUQUETS', payload: data}))
  .catch(err=>console.log(err));
 },[])



  return (
      <div>
        <h2>{categoriesR.filter((category) => category.name)}</h2>
     {bouquetsRe.map((bouquet) => <Card key={bouquet.id} bouquet={bouquet}/>)}
    </div>
  );
}

export default Category;
