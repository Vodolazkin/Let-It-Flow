import React from 'react';


import { YMaps, Map } from 'react-yandex-maps';

function YandexMap () { 
  
  return (
    <YMaps>
      <div>
        <Map defaultState={{ width:'1000px', height: '500px', center: [55.75, 37.57], zoom: 9,  }} width={'100%'}  height={'520px'}/>
      </div>
    </YMaps>
  );
}

export default YandexMap;