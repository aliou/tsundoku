var mongoose = require('mongoose');

var BookListSchema = new mongoose.Schema({
  books:       [ { type: mongoose.Schema.Types.ObjectId, ref: 'Book' } ],
  title:       { type: String, required: true },
  description: { type: String, required: true },
  createdAt:   { type: Date,   default: Date.now },
  popular:     Boolean,
  comments:    [ { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' } ]
});

BookListSchema.statics.popularLists = function(limit, cb) {
  this.find({ popular: true }).exec(cb);
};

module.exports = mongoose.model('BookList', BookListSchema);
