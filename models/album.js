const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlbumSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  description: {
    type: String
  },
  createdDate: {
    type: Date
  },
  artist: {
    type: Schema.Types.ObjectId, ref: 'Artist'
  },
  songs: [{
    type: Schema.Types.ObjectId, ref: 'Song'
  }]
});


module.exports = mongoose.model('Album', AlbumSchema);