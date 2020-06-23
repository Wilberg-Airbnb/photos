const fs = require('fs');
const axios = require('axios');
const db = require('./connection');
const helpers = require('./helpers');
const Photos = require('./Photos');

let photosToChooseFrom = [];
let mongoDataHolder = [];

function insertPhotoSets(data) {
  Photos.deleteMany({}).catch((err) => console.log('Error deleting', err));
  Photos.create(data)
    .then(() => console.log('Succes!'))
    .catch((error) => console.log('Error', error));
}

function grabPhotos(page) {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=100`)
    .then(({ data }) => {
      let urls = data.map((photo) => {
        return `${photo.download_url}?grayscale`;
      });
      photosToChooseFrom.push(...urls);
    });
}

grabPhotos(1)
  .then(() => {
    return grabPhotos(2);
  })
  .then(() => {
    return grabPhotos(3);
  })
  .then(() => {
    return grabPhotos(4);
  })
  .then(() => {
    return grabPhotos(5);
  })
  .then(() => {
    return grabPhotos(6);
  })
  .then(() => {
    return grabPhotos(7);
  })
  .then(() => {
    return grabPhotos(8);
  })
  .then(() => {
    return grabPhotos(9);
  })
  .then(() => {
    return grabPhotos(10);
  })
  .then(() => {
    for (let i = 0; i < 100; i++) {
      mongoDataHolder.push({
        listingId: i,
        photos: helpers.insertRandomAmountOfPhotos(photosToChooseFrom),
      });
    }
  })
  .then(() => {
    let mongoData = mongoDataHolder.map((entry) => {
      return {
        ...entry,
        thumbNail: helpers.convertToThumbNail(entry.photos[0].photoUrl),
      };
    });

    fs.writeFile(
      'database/dummyData.js',
      `let sampleData = ${JSON.stringify(mongoData.slice(0, 3))}`,
      (err) => {
        if (err) console.log('Error writing', err);
        console.log('File was written');
      }
    );
    insertPhotoSets(mongoData);
  })
  .catch((err) => {
    console.log('Error writing data', err);
  });
