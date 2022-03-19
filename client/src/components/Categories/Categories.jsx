import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Categories.css';

function Categories(props) {
  const dispatch = useDispatch();
  const { categoriesR } = useSelector(state => state);
  
  useEffect(() => {
    fetch('http://localhost:4000/categories')
    .then((res) => res.json())
    .then(result => dispatch({
      type: 'INIT_CATEGORIES',
      payload: result
    }))
    .catch(err=>console.log(err));
  },[])
  
  return (
    <>
      <div className='category-container'>
      { categoriesR.map((category) =>
      <Link to={`/categories/${category.id}`}>
    <div className="category-cart-wrapper">
        <h3 className='category-name'>{category.name}</h3>
        <img className='category-img' width="100" height="100" src={`http://localhost:4000${category.icon}`} alt="icons" />
        
    </div></Link>
      )}
    </div>

    </>
  )
}

export default Categories;

// onClick={() => <Link to={`/category/:${id}`}></Link>
