const express = require("express");
const Album = require("../models/AlbumModels");

const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postAlbums = async (req, res) => {
  const album = new Album(req.body);
  try {
    const newAlbum = await album.save();
    res.status(201).json(newAlbum);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const postAlbumSongs = async (req, res) => {
  try {
    const album = await Album.findOne({ albumId: req.params.albumId });
    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }
    album.music.push(req.body);
    await album.save();
    res.status(201).json(album);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getAlbums, postAlbums, postAlbumSongs };
