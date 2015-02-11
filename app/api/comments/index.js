var _       = require('underscore');
var express = require('express');
var Comment = require('./comment.model');

var router = express.Router();

router.get('/popular', function(req, res) {
  Comment.popularComments(function(err, comments) {
    if (err) {
      return res.status(500).json(err);
    }

    comments = _.chain(comments).shuffle().sample(6).value();
    return res.json(comments);
  });
});

module.exports = router;
