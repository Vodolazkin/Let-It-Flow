'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {

    static associate({ Bouquet, User, Cart_order }) {
      this.belongsToMany(Bouquet, { through:'Cart_order' })
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.hasOne(Cart_order, { foreignKey: 'cart_id' })
    }
  }
  Cart.init({
    bouquet_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'Bouquet',
       key: 'id'
     }
    },
    count: {
     type: DataTypes.INTEGER,
    },
    isActive: {
     type: DataTypes.BOOLEAN,
     defaultValue: true
    },
    user_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'User',
       key: 'id'
     }
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
