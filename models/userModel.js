import mongoose, { Schema, mongo } from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    Email:{
        type : String ,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    Phone:{
        type:String,
        required:true
    }
    ,address:{
        type:String,
        required:false
    }

},{timestamps:true})

//adding collection, giving reference and creating model
export default mongoose.model('users',userSchema)