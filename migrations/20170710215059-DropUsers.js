'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  }
};
