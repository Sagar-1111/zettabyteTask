const mongoose = require('mongoose');
const picture = require('./picture');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  'name': {
    'type': String,
    'required': true
  },
  'email': {
    'type': String,
    'required': true,
    'unique': true
  },
  'image': [{type:mongoose.Schema.Types.ObjectId, ref: 'Picture'}],
  'age': {
    'type': Number
  },
  'gender': {
    'type': String
  }
})

const user = mongoose.model('User', UserSchema);
module.exports = user;