import React from 'react';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';
import YandexMap from '../YandexMap/YandexMap';

function Main(props) {
  return (
    <>
      <Slider />
      <Categories />
      <YandexMap />
    </>
  );
}

export default Main;
