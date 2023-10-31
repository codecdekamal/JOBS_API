const mongoose = require("mongoose")
const connectdb = async (url)=>{
     mongoose.connect(url);
}

module.exports = connectdb