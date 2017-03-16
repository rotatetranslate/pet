const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
// const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');


// find or create
module.exports = function(passport) {
  passport.use('login', new localStrategy(
    (username, password, done) => {
      User.findOne({username: username}, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, {message: 'Incorrect username.'});

        return user.comparePassword(password, (err, match) => {
          if (err || !match) return done(err);

          const payload = {id: user._id};
          const token = jwt.sign(payload, jwtSecret);
          const data = {name: user.username};

          return done(null, token, data)
        })
      })
    }
  ));
}
