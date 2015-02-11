var User = require('./user.model');

exports.list = function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(users);
  });
};

exports.show = function(req, res) {
  var username = req.param('username');

  User.findOne({ username: username }, function(err, user) {
    if (err) {
      return res.status(500).json(err);
    }

    if (!user) {
      return res.status(400);
    }

    res.json({ _id: user._id, username: user.username });
  });
}

exports.login = function(req, res) {
  res.json({ _id: req.user._id });
};

exports.signup = function(req, res) {
  res.json({ _id: req.user._id });
};

exports.logout = function(req, res) {
  req.logout();
  return res.status(200).json({ message: 'Successfully logged out.' });
};
