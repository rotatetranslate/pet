const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

require('./db/config');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.json({message: 'hi'});
});

app.post('/login', (req, res) => {
  console.log('bod', req.body);
  res.json({message: 'received'})
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`app listening on ${port}`));
