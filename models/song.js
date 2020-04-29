const mongoose = require('mongoose');

const { Schema } = mongoose;

const SongSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
  },
  duration: {
    type: Number,
  },
  
  lang: {
    type: Schema.Types.ObjectId, ref: 'Language'
  },
  lyrics: {
    type: Schema.Types.ObjectId, ref: 'Lyrics'
  },
  artist: {
    type: Schema.Types.ObjectId, ref: 'Artist'
  },
  genre: [{
    type: Schema.Types.ObjectId, ref: 'Genre'
  }],
  albums: [{
    type: Schema.Types.ObjectId, ref: 'Album'
  }],
});


module.exports = mongoose.model('Song', SongSchema);