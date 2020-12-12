'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('uniUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      love: {
        type: Sequelize.INTEGER
      },
      path: {
        type: Sequelize.STRING
      },
      isAdd: {
        type: Sequelize.BOOLEAN
      },
      love: {
        type: Sequelize.INTEGER
      },
      count: {
        type: Sequelize.INTEGER
      },
      goodsId: {
        type: Sequelize.INTEGER
      },
      imgPath: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.INTEGER
      },
      moneyCard: {
        type: Sequelize.INTEGER
      },
      userId: {
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
    await queryInterface.dropTable('uniUsers');
  }
};