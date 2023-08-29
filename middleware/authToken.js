//for token comaprison- if match then show route

import User from "../models/userModel.js";
import JWT from 'jsonwebtoken'


 export const requireSignIn=async(req,res,next)=>{
    console.log(req.headers.authorization);

    try {
        const decoded=JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
        //decrypt
    
        req.user=decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status()
   
    }
 }


 //admin access
 export const isAdmin=async(req,res,next)=>{
    try {
        //console.log(req.user)
        const user=await User.findById(req.user._id)
        //console.log(user);
        if(user.role !==1){return res.status(401).send({
            success:false,
            message:"unauthorized access"
        }) }
        else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            message:"error in admin middleware"
        })
        
    }

 }
 