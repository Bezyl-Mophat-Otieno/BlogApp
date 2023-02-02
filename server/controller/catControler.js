
const asyncHandler =require('express-async-handler')
const Category = require ('../models/Category')
//CREATE A CATEGORY
// /api/category
const addCategory = asyncHandler(async (req,res)=>{
    const {name} = req.body
     const newCategory = await Category.create({ name })
  
     newCategory ? res.status(200).json("Category added successfully") :  res.status(401).json("Category addition failed ");
  
  })


  // GET CATEGORIES
// /api/category
const getCategories = asyncHandler(async (req,res)=>{
  const categories = await Category.find()
  if(categories){
    res.status(200).json("A list of categories")
  } else {
    res.status(400).json("An empty category list ")

  }
  })

  module.exports = { addCategory , getCategories}
  