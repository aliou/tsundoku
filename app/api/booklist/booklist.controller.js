var _        = require('underscore');
var BookList = require('./booklist.model');
// var Book = require('../books/book.model');

exports.list = function (req, res) {
  var query = BookList.find({}, function(err, booklists) {
    if (err) {
      return res.json(500, err);
    }

    res.json(booklists);
  });
};

exports.popular = function (req, res) {
  BookList.popularBooks(10, function(err, booklists) {
    if (err) {
      return res.json(500, err);
    }

    booklists = _.shuffle(booklists);
    booklists = _.sample(booklists, 6);

    res.json(booklists);
  });
};

exports.show = function (req, res) {
  var booklistId = req.param('id');

  BookList.findById(booklistId, function(err, booklist) {
    if (err) {
      return res.json(500, err);
    }
    if (!book) {
      return res.json(404);
    }

    res.json(booklist);
  });
};

exports.create = function (req, res) {
  var booklist = new BookList(req.body);

  booklist.save(function(err) {
    if (err) {
      return res.json(400, err);
    }

    res.json(booklist);
  });
};

exports.destroy = function (req, res) {
  var id = req.param('id');

  BookList.findByIdAndRemove(id, function(err, booklist) {
    if (err) {
      return res.json(500, err);
    }
    if (!booklist) {
      return res.json(404);
    }

    res.json(200);
  });
};

exports.togglePopular = function (req, res) {
  var booklistId = req.param('id');

  BookList.findById(booklistId, function(err, booklist) {
    if (err) {
      return res.json(500, err);
    }
    if (!booklist) {
      return res.json(404);
    }

    booklist.popular = !booklist.popular;
    booklist.save();

    res.json(booklist);
  });
};

