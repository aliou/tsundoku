var user = require('./user.model');

// TODO: Use a passport middleware to get the information about the user.
exports.create = function(req, res) {
  if (!req.user) {
    return res.send(500)
  }

  var user = {};
  // TODO: Save provider.

  if (user.provider == 'twitter') {
    twitterSave(user, req.user);
  } else if (user.provider == 'facebook') {
    facebookSave(user, req.user);
  } else {
    localSave(user, req.user);
  }

  // Return name, lists and login token (auth the user at the same time)
  res.json(user)
};

exports.show = function (req, res) {
  var userId = req.param('id');
  User.findById(userId, function(err, user) {
    if (err) {
      return res.json(500, err);
    }

    if (!user) {
      return res.json(404);
    }

    // Only return name and lists.
    res.json(user);
  });
};

// TODO: Return user login token.
exports.login = function (req, res) {
  console.log(req.user);
};

exports.logout = function(req, res) {
};

// Private functions.

function localSave(user, data) {
};

function facebookSave(user, data) {
};

function twitterSave(user, data) {
}
