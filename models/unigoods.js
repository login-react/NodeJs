"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class uniGoods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  uniGoods.init(
    {
      name: DataTypes.STRING,
      love: DataTypes.INTEGER,
      path: DataTypes.STRING,
      isAdd: DataTypes.BOOLEAN,
      love: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "uniGoods",
    }
  );
  return uniGoods;
};
