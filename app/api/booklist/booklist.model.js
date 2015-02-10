var mongoose  = require('mongoose');
var Book	= require('../books/book.model.js');

var BookListSchema = new mongoose.Schema({
  // TODO: Populate ?
  books:       [ { type: mongoose.Schema.Types.ObjectId, ref: 'Book' } ],
  title:       { type: String, required: true },
  description: { type: String, required: true },
  createdAt:   { type: Date,   default: Date.now },
  popular:     Boolean
});

BookListSchema.virtual('isPopular').get(function() {
  return this.popular;
});


module.exports = mongoose.model('BookList', BookListSchema);

