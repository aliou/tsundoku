var User          = require('./user.model');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy({ passReqToCallback: true }, function(req, username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    });
  }));

  passport.use('local-signup', new LocalStrategy({ passReqToCallback: true },
    function(req, username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, { message: 'User already exists' });
      } else {
        var user = new User();

        user.username       = username;
        user.provider       = 'local';
        user.local.email    = req.body.email;
        user.local.password = user.generateHash(password);

        user.save(function(err) {
          if (err) {
            return done(null, false, { message: 'Error while creating the user' });
          }

          return done(null, user);
        });
      }
    });
  }));
};
