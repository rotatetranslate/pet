require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');

const app = express();

require('./db/config');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());

const authRoutes = require('./routes/auth');
const petRoutes = require('./routes/pet');

app.use('/auth', authRoutes);
app.use('/pet', petRoutes);

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`app listening on ${port}`));
