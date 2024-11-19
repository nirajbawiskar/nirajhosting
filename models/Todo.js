const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:"user", required: true },
    task:{type:String,required:true},
    desc:{type:String,required:true},
    priority:{type:String,required:true},
    complete:{type:String,required:false},
})

module.exports = mongoose.model("todo",todoSchema)