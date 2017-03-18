require('./config');
const mongoose = require('mongoose');
const Pet = require('../models/pet');
const User = require('../models/user');

const users = [
  {
    username: 'seededuser',
    password: 'abc123'
  },
  {
    username: 'adam',
    password: 'pw'
  }
];

Pet.remove({}, err => {
  if (err) console.log(err);

  User.remove({}, err => {
    if (err) console.log(err);

    User.create(users, (err, users) => {
      console.log(users);

      const pets = [
        {
          owner: users[0]._id,
          name: 'Tamago'
        },
        {
          owner: users[1]._id,
          name: 'Ivan'
        }
      ];

      Pet.create(pets, (err, pets) => {
        if (err) console.log(err);
        console.log(pets);
        console.log(`db seeded with ${users.length} users and ${pets.length} pets`);
        process.exit();
      });
    });
  });
});
