import React from 'react';


import { YMaps, Map, Placemark } from 'react-yandex-maps';

function YandexMap () { 

  const mapData = {
    center: [59.943683, 30.360164],
    zoom: 5,
  };

  const coordinates = [
    [59.943683, 30.360164]
  ];
  
  
  return (
    <YMaps>
      <div>
        <Map defaultState={{ width:'1000px', height: '500px', center: [59.943683, 30.360164], zoom: 15,  }} width={'100%'}  height={'520px'}>
        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
        </Map>
        {/* <Map defaultState={{ width:'1000px', height: '500px', center: [59.943683, 30.360164], zoom: 15,  }} width={'100%'}  height={'520px'}/> */}
      </div>
    </YMaps>
  );
}

export default YandexMap;