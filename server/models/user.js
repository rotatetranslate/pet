const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Pet = require('./pet');

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: String,
  providerId: String,
  accessToken: String
});

UserSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();
    return bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      return next();
    })
});

UserSchema.methods.comparePassword = function(password, cb) {
  var user = this;
  return bcrypt.compare(password, user.password, cb);
}

// UserSchema.methods.pets = function(cb) {
//   mongoose.model('Feel').find({owner: this._id}, function(err, feels) {
//     cb(err, feels);
//   });
// };

const User = mongoose.model('User', UserSchema);

module.exports = User;
