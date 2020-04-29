const mongoose = require('mongoose');

const { Schema } = mongoose;

const LyricsSchema = new Schema({
    track: {
      type: Schema.Types.ObjectId, ref: 'Track',
      required: true
    },
    song: {
      type: Schema.Types.ObjectId, ref: 'Song',
      required: true
    }
});


module.exports = mongoose.model('Lyrics', LyricsSchema);