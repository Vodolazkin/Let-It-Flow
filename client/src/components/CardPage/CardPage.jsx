import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import AccordionList from '../Accordion/AccordionList';
import "./CardPage.css"

function CardPage() {
  // const [state, setState] = useState(false);

  const dispatch = useDispatch();
  const {id} = useParams();
  const { bouquetsRe } = useSelector((state) => state.bouquetsRe)
  const bouquet = bouquetsRe.find((el) => el.id == id);

  const { cardR } = useSelector((state) => state.cardR);

  useEffect(() =>{
    fetch(`http://localhost:4000/card/${id}`)
    .then(res => res.json())
    .then(data => dispatch({ type: 'ONE_CARD', payload: data}))
    .catch(err=>console.log(err));
 },[dispatch])

 
  return (
    <div className='card-container'>
      <div className='container'>
          <div className="cardPage-wrapper">
            <div className="cardPage-box-img">
              <img className="cardPage-img" width="100%" height="100%" src={`http://localhost:4000/${cardR.img}`} alt="b-main"></img>
            </div>
            <div className="cardPage-info-content">
              <p className="cardPage-title">{cardR.title}</p>
              <p className="cardPage-price">{cardR.price} руб.</p>
              <p className='cardPage-description-title'>Описание</p>
              <h4 className="cardPage-description">{cardR.description}</h4>
              <p className='cardPage-description-instruction'>Инструкция свежести</p>
              <AccordionList />
              <div className="cardPage-button-wrapper">
              <ButtonBuy key={bouquet.id} bouquet={bouquet} />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default CardPage;