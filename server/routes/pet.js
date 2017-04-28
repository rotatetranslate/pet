const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');
const passport = require('passport');
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


module.exports = router;
