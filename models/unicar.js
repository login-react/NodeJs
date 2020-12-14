"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class uniCar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  uniCar.init(
    {
      goodsName: DataTypes.STRING,
      account: DataTypes.INTEGER,
      goodsImg: DataTypes.STRING,
      descirle: DataTypes.STRING,
      count: DataTypes.INTEGER,
      goodsId: DataTypes.INTEGER,
      isChecked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "uniCar",
    }
  );
  return uniCar;
};
