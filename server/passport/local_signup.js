const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use('signup', new localStrategy({
  passReqToCallback: true
},
  (req, username, password, done) => {
    const newUser = new User({
      username,
      password
    });
    console.log(newUser)
    newUser.save(err => {
      if (err) return done(err);
      return done(null);
    })
  }))
