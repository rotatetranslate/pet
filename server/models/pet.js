const mongoose = require('mongoose');
const User = require('./user');

const PetSchema = new mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: String,
  age: {type: Number, default: 0},
  weight: {type: Number, default: () => ((Math.random() * 2) + 1).toFixed(1)}, // birthed at random weight between 1-3
  stage: {type: Number, min: 0, max: 4, default: 0}, // egg, child, teen, senior
  alive: {type: Boolean, default: true},
  sleeping: {type: Boolean, default: false},
  sick: {type: Boolean, default: false},
  waste: {type: Number, min: 0, max: 12, default: 0},
  stats: {
    happiness: {type: Number, min: 0, max: 4, default: 1},
    fullness: {type: Number, min: 0, max: 4, default: 1},
    energy: {type: Number, min: 0, max: 4, default: 4},
  },
}, {timestamps: {createdAt: 'birthday'}})

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
