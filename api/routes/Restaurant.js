const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const User = require('../models/User');
const {
  OK,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT
} = require('../constants').STATUS_CODES;

router.post('/addRestaurant', (req, res) => {
  const newRestaurant = req.body;
  console.log(req.data);
  User.findById(newRestaurant.userID)
    .then((user) => {
      if(!user){
        res.status(BAD_REQUEST).send("Creator id invalid");    
      }else{
        Restaurant.create(newRestaurant)
        .then((restaurant) => {
          User.findByIdAndUpdate( newRestaurant.userID, {$push: {"restaurants": restaurant.id}})
            .then((response) => {
              res.status(OK).send(response)
            })
            .catch((error) => {
              res.status(BAD_REQUEST).send("Unable to update user restaurants " + error);
            })
            
    
          res.status(OK).send(restaurant.url);
        })
        .catch((err) => {
          res.status(BAD_REQUEST).send(err);
        })
      }
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send("Unable to find user " + err);    

    }) 
})

router.post('/editRestaurant', (req, res) => {
  const newRestaurant = req.body;
  Restaurant.findByIdAndUpdate(newRestaurant._id, newRestaurant)
    .then(() => {
      res.status(OK).send("Edit Successful");
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send(err);
    });
})

router.post('/getUserRestaurants', (req, res) => {
  User.findById(req.body.userID)
    .then((user) => {
      if(!user){
        res.status(BAD_REQUEST).send("Creator id invalid");    
      }else{
        Restaurant.find({
          "_id" : {
            "$in": user.restaurants
          },
          userID: req.body.userID
        }).then(response => {
          res.status(OK).send(response);
        }).catch((error) => {
          res.status(BAD_REQUEST).send("Unable to retrieve restaurants");
        })
      }
    })
    .catch((err) => {
      res.status(BAD_REQUEST).send("Unable to find user " + err);    

    })
})

// router.post('/deleteRestaurant', (req, res) => {
//   const deleteRestaurant = req.body;

//   Restaurant.findByIdAndDelete(deleteRestaurant.id)
//     .then((response) => {
//       res.status(OK).send(response);
//     })
//     .catch((err) => {
//       res.status(BAD_REQUEST).send(err);
//     })
// })


// router.post('/getOneRestaurant', (req, res) => {
//   Restaurant.findById(req.body.id)
//     .then((restaurant) => {
//       res.status(OK).send(restaurant)
//     })
//     .catch((err) => {
//       res.status(BAD_REQUEST).send(err);
//     });
// })

module.exports = router;
