const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/createUser', (req, res) =>{
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          newUser.password = hash
          User.create(newUser)
            .then(user => {
              res.json({ status: user.email + ' Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: ' User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router;
