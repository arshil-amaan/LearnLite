const express =require('express');
const app=express();
const cors = require('cors');

app.use(cors({
    optionsSuccessStatus : 200 ,
    origin : ["http://localhost:3000", "https://learn-lite.netlify.app/"],
    credentials : true ,
}))


// get the port no
require('dotenv').config({
    path : "./.env"
});
const port=5000;

// import the cookie parser
const cookieParser=require("cookie-parser");
app.use(cookieParser());

// parse the body
app.use(express.json());

// import routes 
const userroute= require("./routers/userroute");

// mount
app.use('/api/v1',userroute);

// database connect
const dbconnect= require("./config/connect");
dbconnect();


// default route 
app.get('/',(req,resp)=>{
    resp.send(`<h1> home page</h1>`);
})


// start the server
app.listen(port,()=>{
    console.log(`server is starting at port no ${port}`);
})


