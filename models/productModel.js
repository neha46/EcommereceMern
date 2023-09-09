import mongoose, { Schema, mongo } from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true

    },
    slug:{
        type:String,
        lowercase:true
    },
    description:
    {
        type: String ,
        require:true
    },
    price:{
        type : Number,
        require:true
    },
    Category:{
        type:mongoose.ObjectId,ref:"Category",require: true},
    quantity:{
        type:Number,require:true,
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
    Shipping:{
        type:Boolean,
    }
},{timestamps:true})
export default mongoose.model("Product",productSchema)