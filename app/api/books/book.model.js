var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  author:      { type: String, required: true },
  description: { type: String, required: true },
  created_at:  { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
