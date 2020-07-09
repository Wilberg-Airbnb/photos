const request = require('supertest');
const app = require('./app');

describe('Test the thumbnail API path path', () => {
  test('It should response the an object with listingId and thumbNail', () => {
    const expected = ['listingId', 'thumbNail'];
    return request(app)
      .get('/api/photos/thumbnail/0')
      .then((response) => {
        const keyValues = Object.keys(JSON.parse(response.text));
        expect(typeof JSON.parse(response.text)).toBe('object');
        expect(keyValues).toEqual(expect.arrayContaining(expected));
      });
  });
});

describe('Test the photos API path', () => {
  test('It should get the whole data object', () => {
    const expected = ['listingId', 'thumbNail', 'photos'];
    return request(app)
      .get('/api/photos/0')
      .then((response) => {
        const keyValues = Object.keys(JSON.parse(response.text)[0]);
        expect(keyValues).toEqual(expect.arrayContaining(expected));
      });
  });
});
