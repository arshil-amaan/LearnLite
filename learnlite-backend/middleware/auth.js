const jwt = require("jsonwebtoken");
const JWT_TOKEN = "arshil";

exports.auth = async (req, resp, next) => {

    try {
        //3 ways to fetch the token    
        // get the token from the request body
        // get the token from the cookies
        // get the token from the header
        console.log("body:" + req.body.token);
        console.log("cookies:" + req.cookies.token);
        console.log("Header:" + req.header("Authorization"));

        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");


        if (!token) {
            resp.status(401).json({
                success: false,
                message: "token missing"
            })
        }
        try {
            // verify the token and decode the token 
            const decode = jwt.verify(token, JWT_TOKEN);

            // console.log(decode);
            req.body = decode;
            // console.log("authentication request:"+decode);


        } catch (error) {
            return resp.status(400).json({
                success: false,
                message: "token is invalid"
            })

        }
        // call the next middleware 
        next();

    } catch (error) {

        return resp.status(400).json({
            success: false,
            message: "something rong while verifying the token "
        })

    }
}