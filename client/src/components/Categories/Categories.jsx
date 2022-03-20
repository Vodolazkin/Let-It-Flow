import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid"
import './Categories.css';

function Categories(props) {

  // const icons = [{id: 1, image: Icon1}, {id: 2, image: Icon2}, {id: 3, image: Icon3}, {id: 4,image: Icon4}, {id: 5,image: Icon5}, {id: 6, image: Icon6} ];


  const dispatch = useDispatch();
  const { categoriesR } = useSelector(state => state.categoriesR);

  console.log('state', categoriesR);

  
  useEffect(() => {
    fetch('http://localhost:4000/categories')
    .then((res) => res.json())
    .then(result => dispatch({
      type: 'INIT_CATEGORIES',
      payload: result
    }))
    .catch(err => console.log(err))
  },[dispatch])
  
  return (
    <>
      <div className='category-container'>
        <div className='container'>
          <div className='category-box'>
            { categoriesR.map((category) =>
            <Link key={uuidv4()} className='category-link' to={`/categories/${category.id}`}>
              <div className="category-cart-wrapper">
                  <img className='category-img' width="30" height="30" src={`http://localhost:4000${category.icon}`} alt="icons" />
                  <h3 className='category-name'>{category.name}</h3>
              </div>
            </Link>
            )}
          </div>
        </div>
    </div>
   </>
  )
}

export default Categories;
