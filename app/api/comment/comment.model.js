var mongoose  = require('mongoose');

var CommentSchema = new mongoose.Schema({
  content:   { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Comment', CommentSchema);
