const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./User');

const RestaurantSchema = new Schema( 
  {
    title:{
      type: String,
    },
    notes: {
      type: String
    },
    favorite:{
      type: Boolean
    },
    userID:{
      type: Schema.Types.ObjectID
    },
    address: {
      type: String,
    },
    rating: {
      type: Number,
    },
    tags: {
      type: Array
    },
    image: {
      type: String
    }

  }
);

// ListingSchema.pre('findByIdAndDelete', { document: true, query: false}, function(next) {
//   // get the list of users in order to delete tag from their tags array
//   User.find({ '_id': { $in: this.users}}, (error, users) => {
//       if(error) 
//           return res.status(BAD_REQUEST).send({ message: 'Bad Request'});
//       users.forEach((user, index) => {
//           user.listings.pull(this.id);
//           user.save();
//       })
//   })
//   next()
// });

module.exports = mongoose.model('Restaurant', RestaurantSchema)