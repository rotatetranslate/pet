const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwtSecret = process.env.JWT_SECRET;

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = jwtSecret;

module.exports = passport => {
  passport.use('jwt', new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({_id: jwt_payload.id}, (err, user) => {
      if (err || !user) return done(new Error('User not found'), false);
      user.pets((err, pets) => done(null, {user: user.username, pets}));
    });
  }));
}
