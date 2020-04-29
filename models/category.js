const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    coverImg: {
      type: String,
    },
    description: { 
      type: String
    },

    bannerPost: {
      type: Schema.Types.ObjectId, ref: 'Post'
    },

    parentCategory: { type: Schema.Types.ObjectId, ref: 'Category'},

    isVisibleInMainMenu: {
        type: Boolean,
        required: true,
        default: false
    },
});


module.exports = mongoose.model('Category', CategorySchema);