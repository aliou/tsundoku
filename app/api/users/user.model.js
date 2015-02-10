var Book     = require('./../books/book.model');
var mongoose = require ('mongoose');

// TODO: Add "to read" and "read" default lists.
// TODO: Add user custom lists.
var UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  provider: { type: String, required: true },
  local: {
    email: String,
    password: String
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    name: String
  },
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
