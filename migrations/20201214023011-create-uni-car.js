'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('uniCars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goodsName: {
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.INTEGER
      },
      goodsImg: {
        type: Sequelize.STRING
      },
      descirle: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER
      },
      goodsId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('uniCars');
  }
};