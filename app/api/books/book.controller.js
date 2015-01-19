var Book = require('./book.model');

exports.list = function (req, res) {
  Book.findOne({}, function(err, books) {
    if (err) {
      return res.json(500, err);
    }

    res.json(books);
  });
};

exports.popular = function (req, res) {
  Book.find({ popular: true }).limit(6).exec(function(err, books) {
    if (err) {
      return res.json(500, err);
    }

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
