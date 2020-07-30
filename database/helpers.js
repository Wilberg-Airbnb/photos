function convertToThumbNail(url) {
  let splitUrl = url.split('/').slice(0, 5);
  splitUrl = splitUrl.concat(['265', '177']).join('/');
  return splitUrl;
}

function convertPhotoInHalf(url) {
  let baseUrl = url.split('/').slice(0, 5);
  let splitUrl = url.split('/');
  let height = parseInt(splitUrl[5] / 2);
  let width = parseInt(splitUrl[6] / 2);
  return baseUrl.concat([height, width]).join('/');
}

function insertRandomAmountOfPhotos(dataSet) {
  let numBtwn5and15 = getRandomInt(5, 15);
  let photoGallery = [];
  while (numBtwn5and15) {
    photoGallery.push({
      photoUrl: dataSet[Math.floor(Math.random() * dataSet.length)],
    });
    numBtwn5and15--;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return photoGallery;
}

module.exports = {
  convertToThumbNail,
  insertRandomAmountOfPhotos,
  convertPhotoInHalf,
};
