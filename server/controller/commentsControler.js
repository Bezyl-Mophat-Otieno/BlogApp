
const Comment = require('../models/Comments')
const Post = require('../models/Post')
const asyncHandler = require('express-async-handler')



//WRITE A COMMENT 
//POST /api/comments/write

const writeComment = asyncHandler(async (req, res) => {
  let { comment, commentID } = req.body;
  commentID = new Object(commentID);
  console.log(commentID)
  if (!comment || !commentID) {
    res.json('fields can never be empty')
  } else {
    const postComment = await Comment.create(
      { commentID, comment }
    );
    postComment ? res.json(postComment) : " something went wrong "

  }
})

// GET ALL COMMENTS 
// GET /api/Comments/
const getAllCommentS = asyncHandler(async (req, res) => {
  const commentID = req.params.tittle
  const blogComments = await Comment.find({ tittle: commentID })
  blogComments ? res.json(blogComments) : res.json('No comments on this blogPost ')
})
//DELETE MY COMMENTS
//DELETE /api/comments/:id
//This functionality will be done by the blog articles authors
const deleteComment = asyncHandler(async (req, res) => {
  //picking a single comment from associated post
  const singleComment = (await Comment.find({ commentID: new Object(req.params.id) }))[0];
  // singleComment ? res.json(singleComment) : res.json('Error ');

  //finding the blog post commented on 
  const commentID = new Object(singleComment.commentID)
  const myPost = Post.findOne({ _id: commentID });


  console.log(commentID)
})


module.exports = {
  getAllCommentS, writeComment, deleteComment
}