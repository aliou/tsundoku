var express = require('express');
var morgan  = require('morgan');
var path    = require('path');

var app = express();

app.set('port', process.env.PORT || 8000);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan('combined'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'))
});

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port') + '.');
});
