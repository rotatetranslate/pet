const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = passport => {
  passport.use('login', new localStrategy((username, password, done) => {
    User.findOne({username: username}, (err, user) => {
      if (err) return done(err);
      if (!user) return done(new Error('Incorrect username'), false);

      return user.comparePassword(password, (err, match) => {
        if (err || !match) return done(new Error('Incorrect password'), false);

        let token = jwt.sign({id: user._id}, jwtSecret);
        return done(null, token)
      });
    });
  }));
}
