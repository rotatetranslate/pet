const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = passport => {
  passport.use('signup', new localStrategy((username, password, done) => {
    if (!username || !password) return done(new Error('Must provide username and password'));
    let newUser = new User({
      username,
      password
    });
    newUser.save((err, user) => {
      if (err) return done(new Error('Username taken'));
      let token = jwt.sign({id: user._id}, jwtSecret);
      return done(null, token);
    });
  }));
}
