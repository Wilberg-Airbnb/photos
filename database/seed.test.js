const db = require('./connection');
const Photos = require('./Photos');

describe('Seeding script', () => {
  test('It should expect one hundred users in the database', () => {
    return Photos.countDocuments({}).then((response) => {
      expect(response).toEqual(100);
    });
  });
});
