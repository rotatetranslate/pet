const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');
const passport = require('passport');
const fetch = require('node-fetch');
const darkSkyKey = process.env.DARK_SKY_KEY;
require('../passport/new_pet')(passport);

router.put('/update', (req, res) => {
  let {pet} = req.body;
  delete pet.updatedAt;
  Pet.findOneAndUpdate({_id: pet._id }, pet, {new: true}, (err, pet) => {
    res.status(200).json(pet);
  });
});

router.post('/new', (req, res, next) => {
  passport.authenticate('new', (err, pet) => {
    err ? res.json({error: err.message}) : res.json(pet);
  })(req, res, next);
});

router.post('/weather', (req, res, next) => {
  let {lat, lng} = req.body;
  fetch(`https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}?exclude=minutely,hourly,daily,alerts,flags`)
  .then(resp => resp.json())
  .then(weather => res.json(weather))
  .catch(err => res.json({err: 'Unable to retrieve weather data'}));
});


module.exports = router;
