const express = require('express');
const db = require('../database/connection');
const Photos = require('../database/Photos');

const app = express();
app.use(express.static('public'));

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
      res.json(result);
    })
    .catch((error) => {
      console.log('Error finding', error);
      res.sendStatus(404);
    });
});

module.exports = app;
