const express = require('express');
const db = require('../database/connection');
const cors = require('cors');
const Photos = require('../database/Photos');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
// Server the same static for EACH lisitngId
app.use('/:listingId', express.static('public'));

app.get('/api/photos/thumbnail/:listingId', (req, res) => {
  Photos.find({ listingId: req.params.listingId })
    .then((result) => {
      res.json({
        listingId: result[0].listingId,
        thumbNail: result[0].thumbNail,
      });
    })
    .catch((error) => {
      console.log('Error finding', error);
      res.sendStatus(404);
    });
});

app.get('/api/photos/:listingId', (req, res) => {
  Photos.find({ listingId: req.params.listingId })
    .then((result) => {
      // Grab just the url;
      return result[0].photos.map((photoObject) => photoObject.photoUrl);
    })
    .then((results) => {
      // Promisify the array of lorem picsum urls to get to get the photo URL
      // So that the front end isn't doing multiple GET requests to picusum and then
      // the redirected source URL
      return Promise.all(
        results.map((request) => {
          return fetch(request)
            .then((response) => {
              return response.url;
            })
            .then((urls) => {
              return urls;
            });
        })
      );
    })
    .then((urls) => {
      console.log('Here are the urls', urls);
      res.json(urls);
    })
    .catch((error) => {
      console.log('Error finding', error);
      res.sendStatus(404);
    });
});

module.exports = app;
