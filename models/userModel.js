import mongoose, { Schema, mongo } from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type : String ,
        required:true,  
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    phone:{ 
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    answer:{
        type:String,  //this is a string of the questions that will be asked to the users
        required:true
    },
    role:{
        type:Number,
        requird:true,
        default:0
    }

},{timestamps:true})

//adding collection, giving reference and creating model
export default mongoose.model('Users',userSchema)