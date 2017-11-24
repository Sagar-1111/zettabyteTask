const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pictureSchema = new Schema({
  'name': {
    'type': String
  },
  'url': {
    'type': String,
    'required': true,
  },
  'mimetype': {
    'type': String
  },
  'date': {
    'type': String
  }
})
const picture = mongoose.model('picture', pictureSchema);
module.exports = picture;