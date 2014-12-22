var Book        = require('./../api/books/book.model');
var fs          = require('fs');
var mongoose    = require('mongoose');
var querystring = require('querystring');
var request     = require('request');
var xml2js      = require('xml2js');

var user_id = '4823954';

///////////////////////////////////////////////////////////////////////////////

// Helper functions

function createBookFromReview(review) {
  var book = new Book({
    title:       review.book.title,
    author:      review.book.authors.author.name,
    description: review.book.description,
    isbn:        review.book.isbn13 || review.book.isbn,
    length:      review.book.num_pages,
    coverUrl:    review.book.image_url.replace(/(\d+)m/, "$1l")
  });

  return (book);
}

function saveToFile(books) {
  var fileName = 'data/books.json';
  fs.writeFileSync(fileName, JSON.stringify(books));
}

function parseShelf(raw_data) {
  var parser = new xml2js.Parser({ explicitArray: false });
  parser.parseString(raw_data, function(err, result) {
    var reviews = result.GoodreadsResponse.reviews.review;
    var books   = reviews.map(createBookFromReview);

   saveToFile(books);
  });
}

///////////////////////////////////////////////////////////////////////////////

// Book downloading

var options = {
  key:      process.env.GOODREADS_KEY,
  page:     1,
  per_page: 200,
  shelf:    'read',
  v:        '2'
};

url = "http://www.goodreads.com/review/list/" + user_id + ".xml?"
    + querystring.stringify(options)

request.get(url, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    parseShelf(body);
  }
});
