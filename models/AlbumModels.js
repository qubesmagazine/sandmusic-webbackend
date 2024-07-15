const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  musicId: Number,
  name: String,
  image: String,
  file: String,
  comments: String,
  duration: String,
  title: String,
  album: String,
  dateAdded: String,
  likes: String,
  lengthOfSong: String,
});

const albumSchema = new mongoose.Schema({
  albumId: Number,
  name: String,
  image: String,
  desc: String,
  bgColor: String,
  totalLengthOfSongs: String,
  music: [songSchema],
});

module.exports = mongoose.model('Album', albumSchema);
