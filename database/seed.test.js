const { MongoClient } = require('mongodb');
const dummyData = require('./dummyData');

describe('insert', () => {
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

  it('should insert 100 documents into a collection', async () => {
    const photos = db.collection('photos');
    await photos.insertMany(dummyData);
    const photosCount = await photos.count({});
    expect(photosCount).toEqual(100);
  });
});
