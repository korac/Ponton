'use strict';
var bcrypt = require('bcrypt-node');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
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

        user.salt = salt;
        bcrypt.hash(user.password, salt, null, function (err, hash) {
          if (err) { throw err; }

          user.password = hash;
          resolve(user);
        });
      });
    });

  });

  User.authenticateUser = function(email, password) {
    User.find({ where: { email: email } })
        .then(function(user) {
          if (!user) {
            return;
          }

          user.matchPassword(password)
              .then(function () {
                console.log('TOCNA JE SIFRA');
              })
              .catch(function (error) {
                console.log('NETOCNA JE SIFRA :(');
              });
        });

  };

  User.prototype.matchPassword = function(password) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      bcrypt.hash(password, _this.salt, null, function (err, hash) {
        if (err) { throw err; }
        console.log(_this.password === hash);
        resolve(_this.password === hash);
      });
    });
  };

  return User;
};