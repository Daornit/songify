const mongoose = require('mongoose');

const { Schema } = mongoose;

const TrackSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  lyrics: {
    type: Schema.Types.ObjectId, ref: 'Lyrics'
  }
});

module.exports = mongoose.model('Track', TrackSchema);