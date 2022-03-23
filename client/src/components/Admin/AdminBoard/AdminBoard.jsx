import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Card from "../../Card/Card"
import { addBouquet } from './../../../redux/actionCreate/bouquetActionCreate'


export default function AdminBoard() {
  
  const [title, setTitle] = useState()
  const [price, setPrice] = useState()

  const { bouquetsRe, categoriesR } = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() =>{
   fetch('http://localhost:4000/bouquets')
   .then(res => res.json())
   .then(data => dispatch({ type: 'INIT_BOUQUETS', payload: data}))
   .catch(err=>console.log(err));
  },[])

  useEffect(() => {
    fetch('http://localhost:4000/categories')
    .then((res) => res.json())
    .then(result => dispatch({
      type: 'INIT_CATEGORIES',
      payload: result
    }))
    .catch(err => console.log(err))
  },[])

  const [file, setFile] = useState('');
  const onChange = e => {
    setFile(e.target.files[0]);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('file', file);

    axios.post('http://localhost:4000/bouquets', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }}).then((data) => {
      console.log(data)
       dispatch(addBouquet(data))
    })
    .catch(console.error());
    setTitle('')
    setPrice('')
	};
 


  return (
    <div className="container divider">
      <div className="wrapper">
        <div>
          <h2>Привет, Админ</h2>
          <h3>Добавить букет</h3>
          <form onSubmit={handleSubmit}>
            <div className="card-input">
              <label className="card-input__label">Название</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="card-input__input"  type="text" name="title" required />
            </div>
            <div className="card-input">
              <label className="card-input__label">Описание</label>
              <textarea type="text" name="description" id="" className="card-input__input"></textarea>
            </div>
            <div className="card-input">
              <label className="card-input__label">Стоимость</label>
              <input value={price} onChange={(e) => setPrice(e.target.value)} className="card-input__input"  type="number" name="price" required />
            </div>

            <div className="card-input">
              <label className="card-input__label">Фото букета</label>
              <input onChange={onChange} type="file" name="img" id="img" className="card-input__input" />
            </div>

            <div className="card-input">
              <label className="card-input__label">Категория</label>
              <select name="category_id" id="" className="card-input__input">
                {categoriesR.categoriesR?.map((category) => <option value={category.id}>{category.name}</option>)}
              </select>
            </div>
            <button className="btn">Добавить букет</button>
          </form>
        </div>
        <div className="calendar">
        <div className='card-box'>
            {bouquetsRe.bouquetsRe?.map((bouquet) => <Card key={bouquet.id} bouquet={bouquet} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
