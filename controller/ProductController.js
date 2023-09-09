
import productModel from '../models/productModel.js'

import slugify from 'slugify'

export const ProductController=async(req,res)=>{
    try {
        const {name}=req.body
        if(!name){return res.status(401).send({sucess:false,message:"name is  required"})}

        const existingProduct= await productModel.findOne({name})
        if(existingProduct){return res.status(200).send({success:true,message:"product already exits"})}

        const product=await new productModel({name,slug:slugify(name)}).save()
        res.status(200).send({
            sucess:true,
            message:"new product created",
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,
        message:"error in creating product",error
    })
        
    }
}