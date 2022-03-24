import React from 'react';
import './AdminCard.css'
import { deleteBouquet } from '../../../redux/actionCreate/bouquetActionCreate';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function AdminCard({ bouquet }) {

  const dispatch = useDispatch()
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:4000/bouquets/${id}`)
    .then(({data}) => {dispatch(deleteBouquet(id))})
    .catch(console.error())}

  return (
    <div className='cart-item-card'>
      <div className='cartAdmin-item-card-img-box'>
        <img className='cart-item-card-img' src={`http://localhost:4000/${bouquet.img}`} alt="bouquet" />
      </div>

      <div className='cart-item-card-content'>
        <div className='cart-item-card--name'>{bouquet.title}</div>
        <div className='cart-item-card--price'>{bouquet.price}$</div>
        
        <div className='box-counter-delete'>
          <button className="cart-item-btn-delete">Редактировать</button>
          <button className="cart-item-btn-delete" key={bouquet.id} onClick={() => deleteHandler(bouquet.id)}>Удалить</button>
        </div>
      </div>

    </div>
  );
}
