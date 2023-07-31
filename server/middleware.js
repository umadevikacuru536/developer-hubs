const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){
    try{
        let token =req.header("token")
        console.log(token)
        if(!token){
            return res.status(400).json("jwt token not found")
        }
        let comparetoken=jwt.verify(token,"jwtPassword")  
        req.user = comparetoken.user;  //comparing requesting user and loged in user
        next();

    }catch(e){
        console.log(e)
        return resizeBy.status(500).json("internal server error")

    }
}