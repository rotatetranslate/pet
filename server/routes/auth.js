const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../passport/local_login')(passport);
require('../passport/jwt_login')(passport);

router.post('/login', (req, res, next) => {
  passport.authenticate('login', (err, token, userData) => {
    if (err) console.log(err);
    res.json({
      token,
      user: userData
    });
  })(req, res, next);
});

router.post('/jwt', (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    console.log(user)
    res.json(user);
  })(req, res, next);
})

// router.post('/signup', passport.authenticate('signup'), (req, res) => {
//   res.status(200).json('created');
// })

module.exports = router;
