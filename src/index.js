// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
dotenv.config({path: './.env'});

import connectDB from "./db/dbconnect.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 7000;


connectDB()
.then(()=> {
    app.listen( PORT, ()=>{
        console.log(`Server is running at PORT: ${PORT}`);
    });
})
.catch((err) => {
    console.error(`MONGODB connection failed!!! \n ERROR: ${err}`);
});