const express = require('express');
const bodyParser = require('body-parser');
const { join } = require('path');
const db = require('../database/connection');
const cors = require('cors');
const Photos = require('../database/Photos');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Server the same static for EACH lisitngId

//
app.get('/public/bundle.js', (req, res, next) => {
  if (req.header('Accept-Encoding').includes('br')) {
    console.log('Brotli called');
    res.set('Content-Encoding', 'br');
    res.set('Content-type', 'application/javascript');
    res.sendFile(join(__dirname, '../', 'public', 'bundle.js.br'));
  } else if (req.header('Accept-Encoding').includes('gzip')) {
    console.log('Gzip called');
    res.set('Content-Encoding', 'gz');
    res.set('Content-type', 'application/javascript');
    res.sendFile(join(__dirname, '../', 'public', 'bundle.js.gz'));
  } else {
    console.log('Uncomp');
    res.sendFile(join(_dirname, '../', 'public', 'bundle.js'));
  }
});
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
      res.json({ photos: urls });
    })
    .catch((error) => {
      console.log('Error finding', error);
      res.sendStatus(404);
    });
});

module.exports = app;
