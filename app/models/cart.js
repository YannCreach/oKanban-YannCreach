const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const List = require('./list');
const Status = require('./status');
const Color = require('./color');

class Cart extends Model {}

Cart.init({

  name: {
    type: DataTypes.TEXT
  },
  description: {
    type: DataTypes.TEXT
  },
  position: {
    type: DataTypes.INTEGER
  },
  deadline: {
    type: DataTypes.TIME
  },
  attachment: {
    type: DataTypes.TEXT
  },
  pinned: {
    type: DataTypes.INTEGER
  },
  list_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: List,
      key: 'id',
    }
  },
  status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Status,
      key: 'id',
    }
  },
  color_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Color,
      key: 'id',
    }
  },

}, {
  sequelize,
  tableName: 'cart',
});

module.exports = Cart;
