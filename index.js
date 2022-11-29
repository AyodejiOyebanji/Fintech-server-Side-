const express = require("express");
const app= express();
const cors =require("cors");
app.use(cors());
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));
app.use(bodyParser.json());
const mongoose =require('mongoose');
require('dotenv').config();
const URI =process.env.MONGO_URL
const PORT = process.env.PORT || 7000
app.set('*', 'cors');
 const userRouter= require("./routes/user.route")

app.use('/users', userRouter);
mongoose.connect(URI, (err)=>{
    if(err){
        console.log("Not connecting");
        console.log(err);
    }else{
        console.log("Connecting");
    }
})

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
})