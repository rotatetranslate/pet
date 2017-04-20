const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pet = require('../models/pet');

router.put('/update', (req, res) => {
  let pet = req.body.pet;
  Pet.findOneAndUpdate({_id: pet._id }, pet, {new: true}, (err, pet) => {
    res.status(200).json(pet);
  })
})


module.exports = router;
