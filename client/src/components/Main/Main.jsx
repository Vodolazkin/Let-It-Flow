import React from 'react';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';
import YandexMap from '../YandexMap/YandexMap';
import BouquetListMain from '../BouquetListMain/BouquetListMain'

function Main(props) {
  return (
    <>
      <Slider />
      <Categories />
      <YandexMap />
      <BouquetListMain />
    </>
  );
}

export default Main;
