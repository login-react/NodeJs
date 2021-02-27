'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class iframe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  iframe.init({
    iframeUrl: DataTypes.STRING,
    headerTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'iframe',
  });
  return iframe;
};