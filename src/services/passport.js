/**
 * Created by kristijankorac on 20/08/2017.
 */
var passport = require('passport');
var User = require('../../models').User;
var LocalStrategy = require('passport-local').Strategy;

var localOptions = { usernameField: 'email' };
var localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  User.findOne({ where: { email: email } })
      .then(function(user) {
        if (!user) {
          return done(null, false);
        }

        user.matchPassword(password)
            .then(function () {
              return done(null, user);
            })
            .catch(function (error) {
              return done(null, false);
            });
      }).catch(function(error) {
        return done(error);
      });

});

passport.use(localLogin);

// Serialize Session
passport.serializeUser(function(user, done) {
  done(null, user);
});

// Deserialize Session
passport.deserializeUser(function(user, done) {
  User.findOne({ where: { id: user.id }})
      .then(function (user) {
        done(null, user);
      }).catch(function(error) {
        done(error);
      });
});