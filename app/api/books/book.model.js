var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  author:      { type: String, required: true },
  description: { type: String, required: true },
  created_at:  { type: Date, default: Date.now },
  isbn:        { type: String, index: true },
  length:      Number,
  cover_url:   String
});

module.exports = mongoose.model('Book', BookSchema);
