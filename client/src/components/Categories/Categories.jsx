import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'




function Categories(props) {

  const dispatch = useDispatch();

  
  useEffect(() => {
    fetch('http://localhost:4000/categories')
    .then((res) => res.json())
     .then(res => console.log('from db categories',res))
    // .then(result => dispatch({
    //   type: 'INIT_CATEGORIES',
    //   payload: result
    // }))
  },[dispatch])
  
  return (
    <div>
      {'res'}
    </div>
  );
}

export default Categories;