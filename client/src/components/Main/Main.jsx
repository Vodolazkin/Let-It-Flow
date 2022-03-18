import React from 'react';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';
import BouquetListMain from '../BouquetListMain/BouquetListMain'

function Main(props) {
  return (
    <>
      <Slider />
      <Categories />
      <BouquetListMain />
    </>
  );
}

export default Main;
