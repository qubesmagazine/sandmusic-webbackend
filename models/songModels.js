const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  songId: Number,
  name: String,
  image: String,
  file: String,
  comments: String,
  duration: String,
});

module.exports = mongoose.model('Song', songSchema);
