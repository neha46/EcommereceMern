import express from 'express'
import {registerController,getAll,loginController,tester} from '../controller/registerController.js'
import JWT from 'jsonwebtoken'
import { isAdmin, requireSignIn } from '../middleware/authToken.js'

//router object
const router = express.Router()

//routing
//register| method-post
router.post('/register',registerController)
router.get('/getAll',getAll)

//login-method post
router.post('/login',loginController)


//dummy test router- REQUIRESIGN- check PROTECTED ROUTe by token, isadmin->check admibn
router.get('/test',requireSignIn,isAdmin,tester)

//protected route
router.get("/userAuth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})

})

export default router;
