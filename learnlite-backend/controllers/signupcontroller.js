const signupmodel = require("../models/signupmodel");
const jwt = require("jsonwebtoken");
const JWT_TOKEN = "arshil";


// create the instantiate of becrypt library to encrypt the password
const bcrypt = require('bcrypt');

exports.signupcontroller = async (req, resp) => {
    try {
        // get the data
        const { username, email, password } = req.body;

        //check if user already exists or not on the basis of email
        const existuser = await signupmodel.findOne({ email });

        // if user already exists--
        if (existuser) {
            return resp.status(400).json({
                success: false,
                message: "user already existsss"
            })
        }

        // decrypt the password
        let hashpassword;
        // use the function of becrypt lib..
        try {
            // no of rounds is 10
            hashpassword = await bcrypt.hash(password, 10);

        }
        catch (error) {
            return resp.status(500).json({
                success: false,
                message: "error in hashing password"
            });

        }

        // create the user in database
        const createuser = await signupmodel.create({
            username, email, password: hashpassword
        });

        resp.status(200).json({
            success: true,
            message: "entry in the database is successfull",
            createuser
        })


    }
    catch (error) {
        return resp.status(500).json({
            success: false,
            message: "error while create entry in the database"
        })
    }
}


exports.login = async (req, resp) => {
    try {
        // fetch the data from request body
        const { email, password } = req.body;
        // validation on email and password
        if (!email || !password) {
            resp.status(404).json({
                success: false,
                message: "Please fill all the details successfully"
            })
        }

        // check for registered user
        const user = await signupmodel.findOne({ email });
        console.log("user" + user);
        // if no registered user
        if (!user) {
            resp.status(400).json({
                success: false,
                message: "user is not registered yet"
            })
        }
        // create a payload
        const payload = {
            email: user.email,
            id: user._id
        }

        // verify password and generate a token
        if (await bcrypt.compare(password, user.password)) {
            // generate a jwt token
            let token = jwt.sign(payload, JWT_TOKEN, {
                expiresIn: "2h",
            });

            // send the token to the user
            //   user={...user,token};
            user.token = token;
            // set the password undefined for security purpose
            user.password = undefined;

            const options = {
                // expires in 3 days
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                // expires:new Date(Date.now()+5000),
                // httpOnly: true,
            }

            // create the cookie in response and token send to the user
            // so that next time use this token to verify the identity
            resp.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,


                message: "user login successfully"
            })

            // resp.status(200).json({
            //     success:true,
            //     token,
            //     user,

            //     message:"user login successfully"
            // })

        }
        else {
            // password not match
            resp.status(400).json({
                success: false,
                message: "Incorrect password"
            });
        }

    } catch (error) {

        return resp.success(500).json({
            success: false,
            message: "Login failure"
        })

    }

}