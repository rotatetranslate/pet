const User = require('../models/user');
const Pet = require('../models/pet');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwtSecret = process.env.JWT_SECRET;

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = jwtSecret;
opts.passReqToCallback = true;

module.exports = passport => {
  passport.use('new', new JwtStrategy(opts, (req, jwt_payload, done) => {
    console.log('jwt ', jwt_payload);
    console.log('body ', req.body);
    let newPet = new Pet({
      owner: jwt_payload.id,
      name: req.body.newPetName
    });
    newPet.save((err, pet) => {
      if (err) return done(new Error('Invalid user or pet name'));
      console.log(pet);
      return done(null, pet);
    });
  }));
}
