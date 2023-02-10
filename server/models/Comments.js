const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  commentID: {
    type: String,
    required: true,
    ref: "Post"
  },
  comment: {
    type: String,
    required: true

  },



},
  { timestamps: true }
);
module.exports = mongoose.model("Comment", CommentSchema);