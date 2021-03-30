const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

const {
  OK,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT
} = require('../constants').STATUS_CODES;

router.post('/createListing', (req, res) => {
  const newListing = req.body;
  Listing.create(newListing)
    .then((listing) => {
      res.status(OK).send(listing.name);
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    })
})

module.exports = router;
