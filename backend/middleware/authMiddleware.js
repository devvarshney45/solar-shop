import jwt from "jsonwebtoken";
import User from "../models/User.js";

export async function protect(req,res,next){
  const token = req.headers.authorization?.split(" ")[1];
  if(!token) return res.status(401).json({message:"No token"});

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id).select("-password");
  next();
}

export function adminOnly(req,res,next){
  if(!req.user.isAdmin){
    return res.status(403).json({message:"Admin only"});
  }
  next();
}