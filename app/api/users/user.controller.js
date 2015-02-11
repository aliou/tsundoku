var User = require('./user.model');

exports.list = function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      // TODO: Create error message.
      return res.status(500).json(err);
    }

    res.json(users);
  });
};

exports.show = function(req, res) {
  var username = req.param('username');

  User.findOne({ username: username }, function(err, user) {
    if (err) {
      // TODO: Create error message.
      return res.status(500).json(err);
    }

    if (!user) {
      return res.status(400);
    }

    // TODO: Create a user redux sending only the informations we need.
    res.json(user);
  });
}

exports.login = function(req, res) {
  res.json(req.user);
};

exports.signup = function(req, res) {
  res.json(req.user);
};

exports.logout = function(req, res) {
  req.logout();
  return res.status(200).json({ message: 'Successfully logged out.' });
};
