const { MongoClient } = require('mongodb');
const request = require('supertest');
const dummyData = require('../database/dummyData');
const app = require('./app');

describe('Test retrieving data from thumbnail endpoint', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('Send an JSON object with a listingId and photos property at the thumbnail endpoint', async () => {
    const photos = db.collection('photos');
    const expected = ['thumbNail', 'listingId'];
    await photos.deleteMany({});
    await photos.insertMany(dummyData);
    const thumbNailObject = await request(app).get('/api/photos/thumbnail/0');
    expect(JSON.parse(thumbNailObject.text).listingId).toEqual(0);
    expect(Object.keys(JSON.parse(thumbNailObject.text))).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
