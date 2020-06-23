const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/fec-photos';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;
