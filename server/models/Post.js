const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
tittle:{
    type:String,
    required:true,
    unique:true
},
language :{
    type:String ,
    required:true
    
},
desc:{
    type:String,
    required:true,
},
username: {
    type:String,
    required:true,
    ref:'User'
},
photo:{
    type:String,
    default:""
},
category : {
    type:Array,
    required:true,
    ref:'Category'
},
status:{
    type:String,
    default:'pending',
    enum:['pending','approved','disaproved']
}

},
{timestamps:true}
);
module.exports = mongoose.model("Post", PostSchema );