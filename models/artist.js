const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtistSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  shortIntro: {
    type: String
  },
  birthDate: {
    type: Date,
  },
  funeralDate: {
    type: Date,
  },
  albums: [{
    type: Schema.Types.ObjectId, ref: 'Album'
  }],
  songs: [{
    type: Schema.Types.ObjectId, ref: 'Song'
  }]
});


module.exports = mongoose.model('Artist', ArtistSchema);