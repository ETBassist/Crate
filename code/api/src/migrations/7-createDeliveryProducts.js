'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("deliveryProducts", {
      id: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deliveryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'deliveries',
          key: 'id'
        },
        allowNull: false
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        },
        allowNull: false
      },
      wasReturned: {
        type: Sequelize.BOOLEAN,
        allowNull: false, 
        defaultValue: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('deliveryProducts')
  }
};
