import express from 'express'
import { ProductController } from '../controller/ProductController.js'
import { isAdmin, requireSignIn } from '../middleware/authToken.js'

import formidable from 'express-formidable'
const router=express.Router()

// create product
router.post("create-product",requireSignIn,isAdmin,formidable(),ProductController)
export default router