const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./User');

const ListingSchema = new Schema( 
  {
    name:{
      type: String,
      required: true
    },
    price:{
      type: Number,
      required: true
    },
    buyer:{
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null
    }
  }
);

ListingSchema.pre('deleteOne', {document: true}, function(callback) {
  User.find(this.id)
})


module.exports = mongoose.model('Listing', ListingSchema)