var _    = require('underscore');
var Book = require('./book.model');

exports.list = function (req, res) {
  var per_page = 18
  var page     = (req.param('page') || 1) - 1;

  // var query = Book.find({}, null, { skip: page * per_page, limit: per_page })
  var query = Book.find({})

  query.exec(function(err, books) {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(books);
  });
};

exports.popular = function (req, res) {
  Book.popularBooks(10, function(err, books) {
    if (err) {
      return res.status(500).json(err);
    }

    books = _.chain(books).shuffle().sample(6).value();
    res.json(books);
  });
};

exports.show = function (req, res) {
  var bookId = req.param('id');

  Book.findById(bookId, function(err, book) {
    if (err) {
      // TODO: Create error message.
      return res.status(500).json(err);
    }
    if (!book) {
      return res.status(404);
    }

    res.json(book);
  });
};

exports.create = function (req, res) {
  var book = new Book(req.body);

  book.save(function(err) {
    if (err) {
      return res.status(400).json(err);
    }

    res.json(book);
  });
};

exports.destroy = function (req, res) {
  var id = req.param('id');

  Book.findByIdAndRemove(id, function(err, book) {
    if (err) {
      return res.status(500).json(err);
    }
    if (!book) {
      return res.status(404);
    }

    res.json(200);
  });
};

exports.togglePopular = function (req, res) {
  var bookId = req.param('id');

  Book.findById(bookId, function(err, book) {
    if (err) {
      return res.status(500).json(err);
    }
    if (!book) {
      return res.status(404);
    }

    book.popular = !book.popular;
    book.save();

    res.json(book);
  });
};
