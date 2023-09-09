import categoryModel from '../models/categoryModel.js'
import slugify from 'slugify'

export const categorycontroller=async(req,res)=>{
  
    try {
        const {name}=req.body
        if(!name){return res.status(401).send({sucess:false,message:"name is  required"})}

        const existingCategory= await categoryModel.findOne({name})
        if(existingCategory){return res.status(200).send({success:true,message:"categopry already exits"})}

        const category=await new categoryModel({name,slug:slugify(name)}).save()
        res.status(200).send({
            sucess:true,
            message:"new category created",
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
             success:false,
             message:"Internal Server Error",
             error
        })
        
    }

}

//upodate category
export const updateCategory=async(req,res)=>{
    try {
         const{name}=req.body
         const{id}=req.params
    const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new: true})
    res.status(200).send({success:true,
    message:"category updated",category})
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,
        message:'error while updating category',error})
    }

}
//get all category
export const getAllCat=async(req,res)=>{
    try {
        const category=await categoryModel.find({})
        res.status(200).send({
            success:true,
            messsage:"getting all categories",
            category
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message:
        "error while getting all categories",error})
        
    }

}

//single one categoryu
export const getOneCat=async(req,res)=>{
    const {id}= req.params;
    try {
        const category= await categoryModel.findOne({slug:req.params.slug});
        res.status(200).send({success:true,
        message:"finding one category",category})
     
        
    } catch (error) {
        console.log("errror");
        res.status(500).send({success:false
        ,message:"category is not found",error})
        
    }
}

// delete categoryt
export const deleteCat=async(req,res)=>{
    const {id}=req.params
    try {
        const category =  await categoryModel.findByIdAndDelete({_id : id });
        res.status(200).send({
            success:true,
            message:"category deleted",category
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,
        message:"not deleted category",error})
    }
}