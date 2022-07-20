const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Tag extends Model {}

Tag.init({
  value: {
    type: DataTypes.TEXT
  },
}, {
  sequelize,
  tableName: 'tag',
});

module.exports = Tag;
