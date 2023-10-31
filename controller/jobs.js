const Jobs = require("../models/Jobs");
const {StatusCodes} = require("http-status-codes");
const { all } = require("../router/auth");
const getAllJobs = async(req,res) =>{
    const company = await Jobs.find({createdBy:req.user._id}).sort('createAt')
    res.send(company);
}

const getJob = async(req,res) =>{
   const {user:{_id},params:{id}} = req
   const job = await Jobs.findOne({_id:id,createdBy:_id});
   res.send(job);
}

const createJob = async(req,res,next)=>{
    try {
     req.body.createdBy = req.user._id;
    const job = await Jobs.create(req.body);
    res.status(StatusCodes.CREATED).json(job)
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({msg:error})
    }
    
}

const updateJob =async(req,res)=>{
    const {id} = req.params;
    const job = await Jobs.findByIdAndUpdate(id,{...req.body})
    res.send(job);
}

const deleteJob = async(req,res)=>{
    const {id} = req.params;
    const job = await Jobs.findOneAndDelete(id,{...req.body})
   res.send(job);
}

module.exports = {getAllJobs,getJob,createJob,updateJob,deleteJob};