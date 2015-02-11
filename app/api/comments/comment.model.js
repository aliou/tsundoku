var mongoose  = require('mongoose');

var CommentSchema = new mongoose.Schema({
  content:   { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  popular:   Boolean
});

CommentSchema.statics.popularComments = function(cb) {
  this.find({ popular: true }).populate('user').exec(cb);
};

module.exports = mongoose.model('Comment', CommentSchema);
