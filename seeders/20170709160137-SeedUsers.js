'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var friend_list = [
      { name: 'Ivan Matas', username: 'matas@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Goran Bogovac', username: 'boggy@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jakov Raos', username: 'rale@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Luka Ćurin', username: 'djuro@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Stjepan Livačić', username: 'scepo@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Duje Ančić', username: 'ancic@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Luka Drezga', username: 'drezga@gmail.com', createdAt: new Date(), updatedAt: new Date() }
    ];
    
    return queryInterface.bulkInsert('Users', friend_list, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
