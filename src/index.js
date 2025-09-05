// require("dotenv").config({path: './env'});
import {app} from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path: './.env' 
})

connectDB()
.then(()=> {
    app.on("error", (err)=>{
            console.log("Error:", err);
            throw err;
    });
    app.listen(process.env.PORT, ()=>{
        console.log(`fp Server started at port ${process.env.PORT}`);
    });
})
.catch((err)=>console.log("DB connection error:", err));