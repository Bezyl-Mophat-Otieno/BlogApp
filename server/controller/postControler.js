const asyncHandler =require('express-async-handler')
const Post = require ('../models/Post')
const bcrypt = require ('bcrypt')


//CREATE A POST 
// /api/post
const createPost = asyncHandler(async (req,res)=>{
  const  {tittle,language,desc,username,photo} = req.body
   const newPost = await Post.create({
    tittle,language,desc,username,photo
   })

   newPost ? res.status(200).json(`"You have successfully posted a block + ${newPost}"` ) :  res.status(401).json("Post creation failed ");

})


//UPDATE POST
// /api/posts/update/:id
const updatePost =asyncHandler (async(req,res)=>{
    const post = await Post.findById(req.params.id)
    if (post){
       if(post.username === req.body.username){
        const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new : true})
        if(updatedPost){
            res.status(200).json("Blog post successfully updated")
        } else {
            res.status(400).json("something went wrong ")
        }

       }else {
        res.status(401).json("You can only update Your blog post")
       }


    }else{
        res.status(404).json("Post Not Found ")
    }


})

// DELETE POST
// /api/posts/delete/:id
const deletePost = asyncHandler( async (req , res )=>{
    const post = await Post.findById(req.params.id)
    if (post){
       if(post.username === req.body.username){
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

//GET POST
// /api/post/:id
const getPost = asyncHandler(async(req,res)=>{
    const post = await Post.findById(req.params.id)
    if(post){
        res.status(200).json(post)
    }
})
//GET ALL POSTS
// /api/post/?username
 const getAllPosts = asyncHandler(async(req,res)=>{
  const username = req.query.username
  const catName = req.query.category
  
  let posts;
  if(username){
    posts = await Post.find({username})
  } else if(catName){
    posts = await Post.find({category:{
        $in: [catName]
    } })
  } else{
     posts = await Post.find()
    }
    res.status(200).json(posts)
  
 })
 //APPROVE POSTS
//  api/post/approve/:id

const appPosts = asyncHandler(async(req , res )=>{
    const post = await Post.findById(req.params.id)
    if (post){
         const updatedPost = await Post.findByIdAndUpdate(req.params.id,{status:'approved'},{new : true})
         if(updatedPost){
             res.status(200).json("Blog post successfully approved")
         } else {
             res.status(400).json("something went wrong ")
         } 
     }else{
         res.status(404).json("Post Not Found ")
     }

})

module.exports = {
    getAllPosts , getPost , updatePost , deletePost , createPost ,appPosts

}