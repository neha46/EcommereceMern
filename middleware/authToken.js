//for token comaprison- if match then show route
import JWT from 'jsonwebtoken'
import User from "../models/userModel.js";


 export const   requireSignIn=async(req,res,next)=>{
    console.log(req.headers);
    try {
        const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
        next()
    } catch (error) {
        console.log(error);
        res.status()
        
    }
 }


 //admin access
 export const isAdmin=async(req,res)=>{
    try {
        const user=await User.findById(req.User._id)
        if(user.role !==1){return res.status(401).send({
            success:false,
            message:"unauthorized access"
        }) }
        else{
            next()
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            message:"error in admin middleware"
        })
        
    }

 }
 