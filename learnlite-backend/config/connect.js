const mongoose=require('mongoose');

require('dotenv').config;
// const url=process.env.URL;
const MONGO_URI = process.env.MONGO_URI;
const dbconnect=()=>{
    mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("db connect successfully");
    }).catch((error)=>{
    console.log("db not connect successfully");
    console.log(error);
    process.exit(1);
    })
}

module.exports=dbconnect;
