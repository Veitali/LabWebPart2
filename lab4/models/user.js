const mongoose=require('../mongoose');
const schemaUser=new mongoose.Schema({
name:{
 type:String,
 unique:true,
 required:true
 },
age:{
 type:Number,
 required:true,
 min:18,
 max:70
 }
 }, {versionKey:false})
const User=mongoose.model("User",schemaUser);
module.exports=User;