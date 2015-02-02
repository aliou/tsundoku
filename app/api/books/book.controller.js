var _    = require('underscore');
var Book = require('./book.model');

exports.list = function (req, res) {
  var per_page = 18
  var page     = (req.param('page') || 1) - 1;

  var query = Book.find({}, null, { skip: page * per_page, limit: per_page })

  query.exec(function(err, books) {

    if (err) {
      return res.json(500, err);
    }

    res.json(books);
  });
};

exports.popular = function (req, res) {
  Book.popularBooks(10, function(err, books) {
    if (err) {
      return res.json(500, err);
    }

    books = _.shuffle(books);
    books = _.sample(books, 6);

    res.json(books);
  });
};

exports.show = function (req, res) {
  var bookId = req.param('id');

  Book.findById(bookId, function(err, book) {
    if (err) {
      return res.json(500, err);
    }
    if (!book) {
      return res.json(404);
    }

    res.json(book);
  });
};

exports.create = function (req, res) {
  var book = new Book(req.body);

  book.save(function(err) {
    if (err) {
      return res.json(400, err);
    }

    res.json(book);
  });
};

exports.destroy = function (req, res) {
  var id = req.param('id');

  Book.findByIdAndRemove(id, function(err, book) {
    if (err) {
      return res.json(500, err);
    }
    if (!book) {
      return res.json(404);
    }

    res.json(200);
  });
};

exports.togglePopular = function (req, res) {
  var bookId = req.param('id');

  Book.findById(bookId, function(err, book) {
    if (err) {
      return res.json(500, err);
    }
    if (!book) {
      return res.json(404);
    }

    book.popular = !book.popular;
    book.save();

    res.json(book);
  });
};
