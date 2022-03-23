'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Bouquets', [
      {
        title: 'Моно 09', description: 'моно букет в пленке с сиренью', price: '5490', img: '/img/monobuketi/1.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 34', description: 'моно букет в крафт бумаге с ранункулюсом', price: '6190', img: '/img/monobuketi/2.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 66', description: 'моно букет в крафт бумаге с гиацинтом', price: '10590', img: '/img/monobuketi/3.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет №1', description: 'букет в пленке с анемоном и краспедией', price: '4790', img: '/img/avtorskie_buketi/4.webp', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет №2', description: 'букет в крафт бумаге с сукулентом и кустовой розой', price: '6990', img: '/img/avtorskie_buketi/5.webp', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет №3', description: 'букет в пленке с хлопком и пионовидной розой', price: '8390', img: '/img/avtorskie_buketi/6.webp', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №8', description: 'букет с лентами с пионовидной кустовой розой', price: '8390', img: '/img/byket_nevesti/7.webp', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №4', description: 'букет с лентами пионовидной розой и астильбой', price: '9690', img: '/img/byket_nevesti/8.webp', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №23', description: 'букет с лентами с георгином и пионовидной розой', price: '15960', img: '/img/byket_nevesti/9.webp', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Наборы для вазы №85', description: 'Набор для сборки с тюльпаном и нарциссом', price: '15960', img: '/img/nabor_dlya_vazi/10.webp', category_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Наборы для вазы №39', description: 'Набор для сборки', price: '15960', img: '/img/nabor_dlya_vazi/11.webp', category_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Наборы для вазы №64', description: 'Набор для сборки', price: '15960', img: '/img/nabor_dlya_vazi/12.webp', category_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Bouquets')
  }
}
