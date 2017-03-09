const mongoose = require('mongoose');
const User = require('./user');

const PetSchema = new mongoose.Schema({
  name: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
