const mongoose=require('mongoose');

const signupschema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("signup",signupschema);