import express from 'express'
import { CreateProductController,getProductController} from '../controller/ProductController.js'
import { isAdmin, requireSignIn } from '../middleware/authToken.js'
import formidable from 'express-formidable'

const router=express.Router()

// create product
router.post("/create-product",requireSignIn,isAdmin,formidable(),CreateProductController)

//get products
router.get("/getProducts",requireSignIn,isAdmin,getProductController)
export default router