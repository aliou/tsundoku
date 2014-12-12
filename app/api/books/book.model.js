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

// Add a virtual property for better access.
BookSchema.virtual('fullTitle').get(function() {
  return this.title + ' by ' + this.author;
});

module.exports = mongoose.model('Book', BookSchema);
