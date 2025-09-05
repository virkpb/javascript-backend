import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Database connected:", connectionInstance.connection.host);
    }
    catch(err){
        console.log("db connection  Error:", err);
        
    }
 }

 export default connectDB;


 // import express from "express";
// const app = express();
// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("Database connected");
//         app.on("error", (err)=>{
//             console.log("Error:", err);
//             throw err;
//         });

//         app.listen(process.env.PORT, ()=>{
//             console.log(`Server started at port ${process.env.PORT}`);
//         });
//     }
//     catch(err){
//         console.log("Error:", err);
//         throw err;
//     }
// })();