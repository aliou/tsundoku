var bodyParser     = require('body-parser');
var express        = require('express');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');
var morgan         = require('morgan');
var path           = require('path');

var app = express();

app.set('port', process.env.PORT || 8000);
app.set('db', process.env.MONGOHQ_URL || 'mongodb://localhost/tsundoku_dev');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended :false }));
app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect(app.get('db'));

app.use('/api/books', require('./api/books'));
app.use('/api/lists', require('./api/booklist'));

app.get('/api/fuckthat', function(req, res) {
  // 54b93beadcb4a86190caf5ba
  var Book = require('./api/book/book.model');

  Book.findById('54b93beadcb4a86190caf5ba', function(err, book) {
    if (err) {
      res.status(500).json(err);
    }

    // book.comments.push(
  });
});

// TODO: delete this.
// app.post('/api/comments', function(req, res) {
//   // var Comment = require('./api/comment/comment.model');
// 
//   var c = new Comment(req.body);
//   c.save(function(err) {
//     if (err) {
//       res.status(500).json(err);
//     }
// 
//     res.json(c);
//   });
// });

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'))
});

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port') + '.');
});
