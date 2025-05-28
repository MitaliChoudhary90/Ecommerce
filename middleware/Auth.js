const jwt=require("jsonwebtoken")
const AsyncHandler=require("express-async-handler")
const User=require("../models/User")

const protect=AsyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){   
        // It will be like [0 : Bearer  1:asdfghjlkklklhjfgdfdaf]
        try{
            token=req.headers.authorization.split(" ")[1]  //[1] since we are finding the item at 1 index
            const decodedToken= jwt.verify(token, process.env.JWT_SECRET);
            req.user=await User.findById(decodedToken.id).select("-password");
            next()
        }catch(err){
            console.log(err)
            res.status(401).json({ message: "Invalid token" });
        }
    }

    if(!token){
        res.status(401);
        throw new Error("Unauthorized")
    }
})


module.exports=protect