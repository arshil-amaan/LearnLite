const express=require("express");
const router=express.Router();

// import controller
const {signupcontroller,login}=require("../controllers/signupcontroller");
const {auth}=require("../middleware/auth");

// mapping
router.post('/signup',signupcontroller);
router.post('/login',login);
// protected routes for middlewares

router.get("/auth",auth,(req,resp)=>{
    resp.status(200).json({
        success:true,
        message:"Welcome to the proctected route for authentication"
    })
})
module.exports=router;