'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var friend_list = [
      { name: 'Ivan Matas', email: 'matas@gmail.com', password: 'password', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Goran Bogovac', email: 'boggy@gmail.com', password: 'password', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jakov Raos', email: 'rale@gmail.com', password: 'password', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Luka Ćurin', email: 'djuro@gmail.com', password: 'password', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Stjepan Livačić', email: 'scepo@gmail.com', password: 'password', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Duje Ančić', email: 'ancic@gmail.com', password: 'password', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Luka Drezga', email: 'drezga@gmail.com', password: 'password', createdAt: new Date(), updatedAt: new Date() }
    ];
    
    return queryInterface.bulkInsert('Users', friend_list, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
