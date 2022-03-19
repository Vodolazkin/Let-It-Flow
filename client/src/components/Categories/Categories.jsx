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
  },[dispatch])
  
  return (
    <>
      <div className='category-container'>
        { categoriesR.map((category) =>
        <div className="category-cart-wrapper">
          <Link to="/" className='category-link'>
            <img className='category-img' width="30" height="30" src={`http://localhost:4000${category.icon}`} alt="icons" />
            <h3 className='category-name' >{category.name}</h3>
          </Link>
        </div>
        )}
      </div>
    </>
  )
}

export default Categories;