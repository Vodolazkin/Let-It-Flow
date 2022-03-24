import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { updateBouquet } from '../../../redux/actionCreate/bouquetActionCreate'

function ModalOrder({handleClose, setOpen, bouquet}) {

  const { categories } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [title, setTitle] = useState(bouquet.title)
  const [price, setPrice] = useState(bouquet.price)
  const [description, setDescription] = useState(bouquet.description)
  const [file, setFile] = useState('');

  const onChange = e => {
    setFile(e.target.files[0]);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('file', file);

    axios.post(`http://localhost:4000/bouquets/edit/${bouquet.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }}).then(({ data }) => {
        console.log(data)
       dispatch(updateBouquet(data))
    })
    .catch(console.error());
    setTitle('')
    setPrice('')
	};
  return (
    <div>
    <div className='modal-order'>
        <div className='modal-order-dialog'>
          <div className='modal-order-close'>
            <button className='modal-order-button' onClick={handleClose}>
              <svg width="55px" height="54px" viewBox="0 0 55 54">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Cancel" transform="translate(0.000000, -1.000000)" fill="#000000">
                        <rect id="Rectangle-path" transform="translate(27.961245, 28.014445) rotate(45.000000) translate(-27.961245, -28.014445) " x="-8.78840257" y="26.5144594" width="73.4992951" height="2.99997123"></rect>
                        <rect id="Rectangle-path" transform="translate(27.890535, 28.014445) rotate(45.000000) translate(-27.890535, -28.014445) " x="26.3905494" y="-8.73520257" width="2.99997123" height="73.4992951"></rect>
                    </g>
                </g>
              </svg>
            </button>
          </div>
        <p className='modal-order-text'>Редактировать {bouquet.title}</p>
        <form onSubmit={handleSubmit}>
            <div className="card-input">
              <label className="card-input__label">Название</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="card-input__input"  type="text" name="title" required />
            </div>
            <div className="card-input">
              <label className="card-input__label">Описание</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="" className="card-input__input"></textarea>
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
                {categories?.map((category) => <option value={category.id}>{category.name}</option>)}
              </select>
            </div>
            <button className="btn">Добавить букет</button>
          </form>
        </div>
      </div> 
      </div>
  );
}

export default ModalOrder;