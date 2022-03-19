'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Bouquets', [
      {
        title: 'Моно 09', description: 'моно букет в пленке с сиренью', price: '5490', img: '/img/monobuketi/081beb28d33206a12278591111dec803.jpeg', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 34', description: 'моно букет в крафт бумаге с ранункулюсом', price: '6190', img: '/img/monobuketi/1593750905_20-p-buketi-na-temnikh-fonakh-21.jpg', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 66', description: 'моно букет в крафт бумаге с гиацинтом', price: '10590', img: '/img/monobuketi/frezii-butony-makro-otrazhenie-chiornyi-fon.jpg', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет №1', description: 'букет в пленке с анемоном и краспедией', price: '4790', img: '/img/avtorskie_buketi/1614400032_21-p-buket-tsvetov-na-temnom-fone-28.jpg', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет №2', description: 'букет в крафт бумаге с сукулентом и кустовой розой', price: '6990', img: '/img/avtorskie_buketi/14977696835068_1920x1200.jpg', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет №3', description: 'букет в пленке с хлопком и пионовидной розой', price: '8390', img: '/img/avtorskie_buketi/модный_букет_в_коробке_preview.jpeg', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №8', description: 'букет с лентами с пионовидной кустовой розой', price: '8390', img: '/img/byket_nevesti/1612516422_57-p-buket-tsvetov-na-serom-fone-110.jpg', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №4', description: 'букет с лентами пионовидной розой и астильбой', price: '9690', img: '/img/byket_nevesti/1614400022_7-p-buket-tsvetov-na-temnom-fone-11.jpg', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №23', description: 'букет с лентами с георгином и пионовидной розой', price: '15960', img: '/img/byket_nevesti/1614400042_59-p-buket-tsvetov-na-temnom-fone-80.jpg', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Наборы для вазы №85', description: 'Набор для сборки с тюльпаном и нарциссом', price: '15960', img: '/img/nabor_dlya_vazi/2018Nature___Flowers_Bouquet_of_tulips_with_gerbera_flowers_on_a_black_background_127332_.jpg', category_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Наборы для вазы №39', description: 'Набор для сборки', price: '15960', img: '/img/nabor_dlya_vazi/wildflowers-1539691_1280.jpg', category_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Наборы для вазы №64', description: 'Набор для сборки', price: '15960', img: '/img/nabor_dlya_vazi/2018Nature___Flowers_Bouquet_of_tulips_with_gerbera_flowers_on_a_black_background_127332_.jpg', category_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Bouquets')
  }
}
