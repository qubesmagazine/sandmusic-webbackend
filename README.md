Sand Music Web App Backend

Introduction

The Sand Music Web App backend manages and serves music albums and songs. It offers a RESTful API built with Node.js, Express, and MongoDB.

Features

Albums and Songs Management

RESTful API Endpoints

<img src="./assets/backendport.png" alt="albums" width="700" height="350"/>

Technologies Used

Node.js
Express
MongoDB
Mongoose
Installation

Clone the repository:


Install dependencies:

npm install

Environment Variables: Create a .env file with:


Start the server:

npm start
API Endpoints

Albums
Get all albums

<img src="./assets/album.png" alt="albums" width="700" height="350"/>

http
GET /albums
Create a new album

http
POST /albums

json

{
  "albumId": 0,

  "name": "Top 50 Global",

  "image": "image_url",

  "desc": "Weekly update of the most played tracks",

  "bgColor": "#2a4365",

  "totalLengthOfSongs": "0:00",

  "music": []
}


Add a song to an album

<img src="./assets/songs.png" alt="albums" width="700" height="350"/>

http

POST /albums/:albumId/songs

json

{</br>
  "musicId": 1,<br/>

  "name": "Song First",<br/>

  "image": "song_image_url",<br/>

  "file": "song_file_url",<br/>

  "comments": "200",<br/>

  "duration": "3:00",<br/>

  "title": "Song Title"<br/>

  "album": "Top 50 Global",<br/>

  "dateAdded": "2023-07-14",<br/>

  "likes": "1000",<br/>

  "lengthOfSong": "3:00"<br/>
}

Testing with Postman

<img src="./assets/postman.png" alt="albums" width="700" height="350"/>

Create a new album

Method: POST

URL: http://localhost:3000/albums

Body: (raw JSON)

json

{
  "albumId": 0, <br/>

  "name": "Top 50 Global", <br/>

  "image": "image_url", <br/>

  "desc": "Weekly update of the most played tracks", <br/>

  "bgColor": "#2a4365", <br/>

  "totalLengthOfSongs": "0:00",<br/>

  "music": []
}

Add a song to an album

Method: POST

URL: http://localhost:3000/albums/0/songs


Body: (raw JSON)


json

{
  "musicId": 1, <br/>

  "name": "Song First", <br/>

  "image": "song_image_url", <br/>

  "file": "song_file_url", <br/>

  "comments": "200", <br/>

  "duration": "3:00",<br/>

  "title": "Song Title",<br/>

  "album": "Top 50 Global", <br/>

  "dateAdded": "2023-07-14", <br/>

  "likes": "1000",<br/>

  "lengthOfSong": "3:00"<br/>
}