// require ('dotenv').config({})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
// .then(()=>{
//     app.listen(process.env.PORT||8000,()=>{
//        console.log(`server is running at :${process.env.PORT}`);
//     })
// })
// .catch((err)=>{
//     console.log("MONGOdb connection failed!!1",err);
// })


//approach 1 to connect the database
/*
import express from "express"
const app=express()
(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERRRR:",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
       })

    } catch (error) {
        console.error("ERROR:",error);
        throw err;
    }
})() */