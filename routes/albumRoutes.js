const express = require('express');
const router = express.Router();
const { getAlbums, postAlbums, postAlbumSongs } = require('../controllers/albumControllers');

// Get all albums routes
router.get('/', getAlbums);

// Create a new album
router.post('/', postAlbums);

// Add a song to an existing album
router.post('/:albumId/songs', postAlbumSongs );

module.exports = router;
