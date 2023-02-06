const Comment = require ('../models/Comments')
const asyncHandler =require('express-async-handler')



//WRITE A COMMENT 
//POST /api/comments/write

const writeComment = asyncHandler(async (req , res )=>{
  const commentID = req.params.id;
  const { comment } = req.body;
  if(!comment){
    res.json('comment can never be empty')
  }else{
    const postComment = Comment.create (
      {tittle:commentID,comment}
    );
postComment ?res.json('Commented Successfully') : " something went wrong "
    
  }
})

// GET ALL COMMENTS 
// GET /api/Comments/:tittle
 const getAllCommentS = asyncHandler(async(req,res)=>{
   const commentID = req.params.tittle
   const blogComments =await Comment.find({tittle:commentID})
   blogComments ? res.json(blogComments) : res.json('No comments on this blogPost ')
 })
//DELETE MY COMMENTS
//DELETE /api/comments/:id
//This functionality will be done by the blog articles authors
const deleteComment = asyncHandler( async (req , res )=>{
    const singleComment = await Comment.findById(req.params.id)
    if (singleComment){
       if(singleComment.username === req.body.username){
        const deletedPost = await Post.findByIdAndDelete(req.params.id)
        if(deletedPost){
            res.status(200).json("Blog post successfully deleted")
        } else {
            res.status(400).json("something went wrong ")
        }

       }else {
        res.status(401).json("You can only delete Your blog post")
       }


    }else{
        res.status(404).json("Post Not Found ")
    }


})


module.exports ={
  getAllCommentS, writeComment
}