"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class uniChat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  uniChat.init(
    {
      content: DataTypes.STRING,
      avator: DataTypes.STRING,
      nickName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "uniChat",
    }
  );
  return uniChat;
};
