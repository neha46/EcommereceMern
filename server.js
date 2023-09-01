// const express=require('express')
import express from 'express'
// const colors= require('colors')
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectdb from './config/database.js';
import authRoute  from './routes/auth.Router.js'
import cors from 'cors'

 // config  env at top
 dotenv.config();

 //datavbase comfif
 connectdb()


//rest object to  create rest apis
const app=express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//load routes
app.use('/auth',authRoute)

//rest api
app.get('/',(req,res)=>{
res.send("<h1>Welcome to ecommerece Mern stack project</h1>")
})

//port
const PORT=process.env.PORT||8080


//APP RUN/LISTEn
app.listen(PORT,()=>{
    console.log(`server running on ${process.env.Dev_Mode} http://localhost:${PORT}`.bgCyan.white);
})
