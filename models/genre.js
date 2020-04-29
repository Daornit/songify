const mongoose = require('mongoose');

const { Schema } = mongoose;

const GenreSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  parent: {
    type: Schema.Types.ObjectId, ref: 'Genre'
  }
});


module.exports = mongoose.model('Genre', GenreSchema);