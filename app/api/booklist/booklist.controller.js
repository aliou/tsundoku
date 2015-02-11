var _        = require('underscore');
var BookList = require('./booklist.model');

exports.list = function (req, res) {
  BookList.find({}, function(err, booklists) {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(booklists);
  });
};

exports.popular = function (req, res) {
  BookList.popularBooks(5, function(err, booklists) {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(booklists);
  });
};

exports.show = function (req, res) {
  var booklistId = req.param('id');

  BookList.findById(booklistId).
    populate('books comments').exec(function(err, booklist) {
    if (err) {
      return res.status(500).json(err);
    }
    if (!booklist) {
      return res.status(404);
    }

    res.json(booklist);
  });
};

exports.create = function (req, res) {
  var booklist = new BookList(req.body);

  booklist.save(function(err) {
    if (err) {
      return res.status(400).json(err);
    }

    res.json(booklist);
  });
};

exports.destroy = function (req, res) {
  var id = req.param('id');

  BookList.findByIdAndRemove(id, function(err, booklist) {
    if (err) {
      return res.status(500).json(err);
    }
    if (!booklist) {
      return res.status(404);
    }

    res.status(200);
  });
};

exports.togglePopular = function (req, res) {
  var booklistId = req.param('id');

  BookList.findById(booklistId, function(err, booklist) {
    if (err) {
      return res.status(500).json(err);
    }
    if (!booklist) {
      return res.status(404);
    }

    booklist.popular = !booklist.popular;
    booklist.save();

    res.json(booklist);
  });
};
