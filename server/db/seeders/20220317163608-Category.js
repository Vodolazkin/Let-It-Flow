'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Монобукеты', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Композиции', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Букет невесты', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Набор для вазы', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Авторские букеты', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Цветы в корзине', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories')
   }
  };
