const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
    unique: true,
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