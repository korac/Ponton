'use strict';
var bcrypt = require('bcrypt-node');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  User.beforeCreate(function(user, options) {
    return new Promise(function (resolve, reject) {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) { reject(err); }

        bcrypt.hash(user.password, salt, null, function (err, hash) {
          if (err) { throw err; }
          user.password = hash;
          resolve(user);
        });
      });
    });

  });

  return User;
};