const jwt = require("jsonwebtoken");
const User = require("../models/Users")
const {BadRequest,NotFound,UnAunthenticated} = require("../error/index")
require("dotenv").config();
const {StatusCodes,getReasonPhrase} = require('http-status-codes')
const Authenticating = async (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    if(!authHeader||!authHeader.startsWith('Bearer ')){
     const error =  new UnAunthenticated("Header is not defined")
     next(error)
    }
   try { 
      const token = authHeader.replace('Bearer ','');
    const payload = jwt.verify(token,process.env.PRIVATE_KEY);
    const userId = payload.userId;
    const user = await User.findById({_id:userId}).select("-password");
    req.user = user;
    next();
   } catch (error) {
      next(error);  
    }
}
module.exports = Authenticating;