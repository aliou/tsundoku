var Book     = require('./../api/books/book.model');
var books    = require('./../../data/books.json');
var mongoose = require('mongoose');

var db = process.env.MONGOHQ_URL || 'mongodb://localhost/tsundoku_dev';
mongoose.connect(db, function(err) {
  if (err) {
    throw err;
  }

  Book.create(books)
  .then(function() {
    mongoose.connection.close();
  });
});
