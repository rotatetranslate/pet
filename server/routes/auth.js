const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../passport/local_login')(passport);
require('../passport/jwt_login')(passport);
require('../passport/local_signup')(passport);

router.post('/login', (req, res, next) => {
  passport.authenticate('login', (err, token) => {
    err ? res.json({error: err.message}) : res.json({token});
  })(req, res, next);
});

router.post('/jwt', (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    err ? res.json({error: err.message}) : res.json(user);
  })(req, res, next);
})

router.post('/signup', (req, res, next) => {
  passport.authenticate('signup', (err, token) => {
    err ? res.json({error: err.message}) : res.json({token});
  })(req, res, next);
});

module.exports = router;
