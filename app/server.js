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

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'))
});

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port') + '.');
});
