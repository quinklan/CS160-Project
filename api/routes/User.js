const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const {
  OK,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT
} = require('../constants').STATUS_CODES;


router.post('/createUser', (req, res) =>{  
  const newUser = req.body;
  if(!newUser.email){
    res.status(BAD_REQUEST).send("Must Provide Email") 
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          newUser.password = hash
          User.create(newUser)
            .then(user => {
              res.status(OK).json({ status: user.email + ' Registered!' })
            })
            .catch(err => {
              res.status(BAD_REQUEST).send('error: ' + err);
            })
        })
      } else {
        res.status(CONFLICT).json({ error: ' User already exists' })
      }
    })
    .catch(err => {
      res.status(BAD_REQUEST).send('error: ' + err)
    })
})

router.post('/editUser')

module.exports = router;
