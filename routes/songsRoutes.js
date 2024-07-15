const express = require('express');
const { getSongs, createSongs } = require('../controllers/songsController');
const router = express.Router();


// route Get all songs
router.get('/', getSongs );


// route Create a new song
router.post('/', createSongs);


module.exports = router;
