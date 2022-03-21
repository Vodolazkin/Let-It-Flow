import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Card from "../Card/Card"

function Category(props) {
const { bouquetsRe } = useSelector((state) => state.bouquetsRe)
const { categoriesR } = useSelector((state) => state.categoriesR)


const dispatch = useDispatch()
const { id } = useParams()

useEffect(() =>{
  fetch(`http://localhost:4000/categories/${id}`)
  .then(res => res.json())
  .then(data => dispatch({ type: 'INIT_CATEGORY_BOUQUETS', payload: data}))
  .catch(err=>console.log(err));
},[dispatch])


const category = categoriesR.find((el) => el.id == id);


//  useEffect(() =>{
//   fetch(`http://localhost:4000/categories/${id}`)
//   .then(data => console.log(data));
//  },[])


  return (
    <div className='category-container'>
      <div className='container'>
        <h1>{category.name}</h1>
        <div className='category-box'>
        { bouquetsRe && bouquetsRe.map((bouquet) => <Card key={bouquet.id} bouquet={bouquet}/>)}
        </div>
     </div>
    </div>
  );
}

export default Category;
