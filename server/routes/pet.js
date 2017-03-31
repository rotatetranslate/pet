const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pet = require('../models/pet');

router.post('/feed', (req, res) => {
  Pet.findOneAndUpdate({_id: req.body.pet._id }, req.body.pet, {new: true}, (err, pet) => {
    res.status(200).json(pet);
  })
})


module.exports = router;
