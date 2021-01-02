'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mobilerecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mobilerecord.init({
    content: DataTypes.STRING,
    avator: DataTypes.STRING,
    nickName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mobilerecord',
  });
  return mobilerecord;
};