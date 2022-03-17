'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cart_order, User }) {
      this.belongsTo(Cart_order, { foreignKey: 'order_id'})
      this.belongsTo(User, { foreignKey: 'user_id' })
    }
  }
  Order.init({
    delivery_date: {
     type: DataTypes.DATE,
    },
    delivery_time: {
     type: DataTypes.DATE,
    },
    delivery_address: {
     type: DataTypes.STRING,
    },
    delivery_method: {
     type: DataTypes.STRING,
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
    modelName: 'Order',
  });
  return Order;
};
