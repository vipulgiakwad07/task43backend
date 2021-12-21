const mongoose = require("mongoose")

const Student = mongoose.Schema({
    sname:String,
    courseName:String,
    sid:Number
});

//module.exports=mongoose.model("mentors", mentor)
module.exports= mongoose.model("students",Student)