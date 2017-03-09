require('./config');
const Pet = require('../models/pet');
const User = require('../models/user');

Pet.remove({})
  .then(() => {
    User.remove({})
      .then(() => {
        const user = new User({
          username: 'seededuser',
          password: 'abc123'
        })
        return user.save()
      })
      .then(() => process.exit())
  })
