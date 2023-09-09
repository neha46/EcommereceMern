
import productModel from '../models/productModel.js'
import fs from 'fs'
import slugify from 'slugify'
//create products-----------------------------
export const CreateProductController=async(req,res)=>{
    try {
        const {name,slug,description,price,shipping,quantity,Category}=req.fields
        const {photo}=req.fields

        //validations
        switch(true){
            case (!name):
                {return res.status(401).send({error:"name is  required"})
            }
            case (!slug):{
                return res.status(401).send({error:"slug is  required"})
            }
            case (!description):{
                return res.status(401).send({error:"description is  required"})
            }
            case (!Category):{
                return res.status(401).send({error:"Category is  required"})
            }
            case (!shipping):{
                return res.status(401).send({error:"shipping is  required"})
            }
            case (!price):{
                return res.status(401).send({error:"price is  required"})
            }
            case (!quantity):{
                return res.status(401).send({error:"quantity is  required"})
            }
            case (photo && photo.size>10000):{
                return res.status(401).send({error:"photo  is  required and size  should be less than 1 mb"})
            }

        }

        const existingProduct= await productModel.findOne({name})
        if(existingProduct){return res.status(200).send({success:true,message:"product already exits"})}

        const product= new productModel({...req.fields,slug:slugify(name)})
        if(photo){
            product.photo.data=fs.readFileSync(photo.path)
            product.photo.contentType=photo.contentType
        }
        await product.save()
        res.status(200).send({
            sucess:true,
            message:"new product created sucessfully",
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,
        message:"error in creating product",error
    })
        
    }
}

//get all products---------------------
export const getProductController=async(req,res)=>{
    try {
        const  products= await productModel.find({}).select("--photo").limit(12).sort({createdAt:-1});
        res.status(200).send({
            success:true,
            countTotal: products.length,
            message:"getting products successfully",
            products
           
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,
        message:"error in getting all products",error})
        
    }
}






















