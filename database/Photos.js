const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  listingId: Number,
  photos: [
    {
      photoUrl: String,
    },
  ],
  thumbNail: String,
});

const Photos = mongoose.model('Photo', photoSchema);

module.exports = Photos;
