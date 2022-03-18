import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Categories(props) {

  const dispatch = useDispatch();
  const { categoriesR } = useSelector(state => state);


  console.log('state', categoriesR);

  
  useEffect(() => {
    fetch('http://localhost:4000/categories')
    .then((res) => res.json())
    .then(result => dispatch({
      type: 'INIT_CATEGORIES',
      payload: result
    }))
  },[dispatch])
  
  return (
    <div>
      {categoriesR.map((category, index) => <div key={index}>{category.name}</div>)}
    </div>
  );
}

export default Categories;