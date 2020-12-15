"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class uniUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  uniUser.init(
    {
      name: DataTypes.STRING,
      love: DataTypes.INTEGER,
      path: DataTypes.STRING,
      isAdd: DataTypes.BOOLEAN,
      love: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      goodsId: DataTypes.INTEGER,
      imgPath: DataTypes.STRING,
      title: DataTypes.STRING,
      account: DataTypes.INTEGER,
      moneyCard: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      code: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      nickName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "uniUser",
    }
  );
  uniUser.associate = function (models) {
    models.uniUser.hasMany(models.uniCar);
  };
  return uniUser;
};
