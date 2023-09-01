//register contriller
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import User from "../models/userModel.js";
import JWT from'jsonwebtoken'




const registerController=async(req,res)=>
{  
try {
   
    const {name,password,email,phone,address,role}=req.body;
    //validations
    if(!name){res.send({message: "name is required"})}
    if(!phone){res.send({message: "phone is required"})}
    if(!password){res.send({message: "password is required"})}
    if(!email){res.send({message: "email is required"})}
    if(!address){res.send({message: "address is required"})}
   
//existing user
const  existingUser = await User.findOne({ email });
if (existingUser) {
    return res.status(400).json({
        sucess:false,
        message:"Email already exists"
    });
}

//password hash

const hashedPassword= await hashPassword(password)
//register user
//to save
const user= await new User({name,phone,email,address,role,password:hashedPassword}).save()
res.status(200).send({
    success:true,
    messgae:"user registration successful",
    user
})  

} catch (error) {
    console.log(error);
    res.status(500).send({
        sucess:false,
        message:error.message,
        error

    })
}
    
}
// get all data
const getAll = async(req,res)=>{
    const data = await User.find()
    return res.status(200).send({status:true,data:data})
}


//login controller
const loginController=async(req,res)=>
{
    try {
        const {email,password}=req.body
        //validate
        if(!email || !password)
        {
            return res.status(404).send({
                sucess:false,
                message:"invalid mail or password"
            })
        }
        //check user
        const user=await User.findOne({email})
        if(!user)
        {return res.status(404).send({
            sucess:false,
            message:"email is not registered"
        })}
        //match & compare password
        const match =await comparePassword(password,user.password)
        if(!match)
        {
            return res.status(200).send({
                sucess: false ,
                message:'wrong password'
            })
        }

        //token create-create secret key-onthe basis of token we can protect our routes
        //token have-
        //{_id:user._id}- payload,,proces.env.JWT_SECRET ->secret key, {expiresIn:'10d',}->options
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'10d',})
        res.status(200).send({
            success:true,
            message:"user login sucessfully ",
            user:{
                name:user.name,
                email :user.email,
                phone:user.phone,
                password:user.password,
                role:user.role
            },
            token,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            sucess:false,
            message:"Error in login",
            error,
        })
        
    }
}

//dummy test router
const   tester=(req,res)=>{
    res.send("this is our protected route")
}


export {registerController,getAll,loginController,tester}