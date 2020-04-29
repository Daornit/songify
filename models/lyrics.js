const mongoose = require('mongoose');

const { Schema } = mongoose;

const LyricsSchema = new Schema({
    track: {
      type: Schema.Types.ObjectId, ref: 'Track'
    },
    song: {
      type: Schema.Types.ObjectId, ref: 'Song'
    }
});


module.exports = mongoose.model('Lyrics', LyricsSchema);