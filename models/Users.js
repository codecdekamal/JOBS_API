const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide name please."],
        minlength:[3,'must have minimum three letters, you got {VALUE}'],
    },
    email:{
        type:String,
        required:[true,"Please provide name please."],
        minlength:[3,"must have minimum three letters"],
        // match: RegExp, creates a validator that checks if the value matches the given regular expression
        unique:[true,"Email is used"]
    },
    password:{
        type:String,
        required:[true,"Please provide name please."],
        minlength:[6,"must have minimum three letters"],
    }
})

module.exports = mongoose.model("User",UserSchema);