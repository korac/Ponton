/**
 * Created by kristijankorac on 20/08/2017.
 */
var passport = require('passport');
var User = require('../../models').User;
var LocalStrategy = require('passport-local');

var localOptions = { usernameField: 'email' };
var localLogin = new LocalStrategy(localOptions, function(email, password, done) {

  User.find({ where: { email: email } })
      .then(function(user) {
        if (!user) {
          return done(null, false);
        }

        user.matchPassword(password)
            .then(function () {
              return done(null, user);
            })
            .catch(function (error) {
              return done(error);
            });
      }).catch(function(error) {
        return done(error);
      });

});

passport.use(localLogin);