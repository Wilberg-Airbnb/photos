const mongoose = require('mongoose');

const mongoUri = 'mongodb://mongo:27017/fec-photos';
const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
