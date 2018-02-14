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
        User.belongsToMany(models.User, { through: model.Friends });
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
    return new Promise(function(resolve, reject) {
      User.find({ where: { email: email } })
          .then(function(user) {
            if (!user) {
              return;
            }

            user.matchPassword(password)
                .then(function () {
                  console.log('TOCNA JE SIFRA');
                   resolve(user);
                })
                .catch(function () {
                  console.log('NETOCNA JE SIFRA :(');
                  reject();
                });
          });
    });
  };

  User.prototype.matchPassword = function(password) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      bcrypt.hash(password, _this.salt, null, function (err, hash) {
        if (err) { throw err; }
        console.log(_this.password === hash);
        if(_this.password === hash) {
          resolve();
        } else {
          reject();
        }
      });
    });
  };

  return User;
};