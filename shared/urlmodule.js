const mongoose=require("mongoose");

const urlSchema=new mongoose.Schema( 
{urlcode:String,
longurl:String,
shorturl:String,
date:{
    type:String,
    default:Date.now
}}
)

const signupSchema=new mongoose.Schema(
{
cname:String,
Email:String,
password:String    
}
)

exports.urlSchema=mongoose.model('Url',urlSchema,'entry')

exports.signupSchema=mongoose.model('Signup',signupSchema,'signup')