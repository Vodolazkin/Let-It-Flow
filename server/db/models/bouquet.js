'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bouquet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cart, Category }) {
      this.belongsTo(Cart, { foreignKey: 'bouquet_id' })
      this.hasOne(Category, { foreignKey: 'category_id' })
    }
  }
  Bouquet.init({
    title: {
     type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
     type: DataTypes.INTEGER,
    },
    img: {
     type: DataTypes.TEXT,
    },
    category_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'Category',
       key: 'id'
     }
    }
  }, {
    sequelize,
    modelName: 'Bouquet',
  });
  return Bouquet;
};
