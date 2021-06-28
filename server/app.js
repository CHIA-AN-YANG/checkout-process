"use strict";
const express = require('express');
const methodOverride = require('method-override')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const session = require('express-session')
const app = express();
const port = process.env.PORT
const db = require('./models')
const Todo = db.Todo
const User = db.User
const config = require('./config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}

app.use(allowCrossDomain)

router.post('/name', function(req, res) {
  db.insert([
      req.body.firstname,
      req.body.lastname,
      bcrypt.hashSync(req.body.password, 8)
  ],
  function (err) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      db.selectByEmail(req.body.email, (err,user) => {
          if (err) return res.status(500).send("There was a problem getting user")
          let token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400 // expires in 24 hours
          });
          res.status(200).send({ auth: true, token: token, user: user });
      });
  });
});
app.use(router)

let server = app.listen(port, function() {
    console.log('Express server listening on port ' + port)
});