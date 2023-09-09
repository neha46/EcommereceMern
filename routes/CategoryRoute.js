import express from "express";
import { isAdmin, requireSignIn } from '../middleware/authToken.js'

import { categorycontroller,updateCategory,getAllCat, getOneCat,deleteCat } from "../controller/categorycontroller.js";
const router=express.Router()

//create categpry
router.post("/create-category",requireSignIn,isAdmin,categorycontroller)

//update category
router.put("/update-category/:id",requireSignIn,isAdmin,updateCategory)

//get all category
router.get("/allCategory",requireSignIn,isAdmin,getAllCat)
export default router 
//get one category
router.get("/get-oneCat/:slug",requireSignIn,isAdmin,getOneCat)

//ddelete categpry
router.delete('/deleteCat/:id',requireSignIn,isAdmin,deleteCat)