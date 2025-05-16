import jwt, { decode } from "jsonwebtoken";
import User from "../models/User.js"



export const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"Unauthorised -No token provided"})
        }
        
        const decoded =jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!decoded){
            return res.status(401).json({message:"Unauthorised -Invalid token"})
        }

        const user=await User.findById(decoded.userId).select("-password");
        if(!user){
            console.log("inside middleware")
            return res.status(401).json({message:"Unauthorized - User not found"})

        }
        req.user=user
        next();
    } catch (error) {
       console.log("Error in Protectroute middleware",error.message);
       return res.status(500).json({message:"Internal Server error"})
    }
}