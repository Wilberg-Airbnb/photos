const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017/fec-photos';
const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
