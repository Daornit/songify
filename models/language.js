const mongoose = require('mongoose');

const { Schema } = mongoose;

const LanguageSchema = new Schema({
  code: {
    type: String, 
    required: true
  },
  name: {
    type: String, 
    required: true
  }
});


module.exports = mongoose.model('Language', LanguageSchema);