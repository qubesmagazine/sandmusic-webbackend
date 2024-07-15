const express = require('express');
const mongoose = require('mongoose');
const albumsRouter = require('./routes/albumRoutes');
const songsRouter = require('./routes/songsRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use('/albums', albumsRouter);
app.use('/songs', songsRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});