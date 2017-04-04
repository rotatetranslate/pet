const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pet = require('../models/pet');

router.put('/update', (req, res) => {
  console.log(req.body)
  Pet.findOneAndUpdate({_id: req.body.pet._id }, req.body.pet, {new: true}, (err, pet) => {
    res.status(200).json(pet);
  })
})


module.exports = router;
