const mongoose = require("mongoose")

const Mentor = mongoose.Schema({
    name:String,
    id:Number
});

//module.exports=mongoose.model("mentors", mentor)
module.exports= mongoose.model("mentors",Mentor)