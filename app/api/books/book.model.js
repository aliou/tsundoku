var mongoose  = require('mongoose');
var Goodreads = require('./goodreads');

var BookSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  author:      { type: String, required: true },
  description: { type: String, required: true },
  createdAt:   { type: Date, default: Date.now },
  isbn:        { type: String, index: true },
  goodreadsId: String,
  length:      Number,
  coverUrl:    String,
  popular:     Boolean
});

// Add a virtual property for better access.
BookSchema.virtual('fullTitle').get(function() {
  return this.title + ' by ' + this.author;
});

BookSchema.virtual('isPopular').get(function() {
  return this.popular;
});

// Find the ISBN and cover URL on save.
BookSchema.pre('save', function(next, done) {
});

module.exports = mongoose.model('Book', BookSchema);
