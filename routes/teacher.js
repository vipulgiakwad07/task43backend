const tec = require ("express");
const std = require ("express");

const { route } = require ("express/lib/application")
const req = require("express/lib/request");
const res = require("express/lib/response");
const data = require("../models/data");
const Mentor = require("../models/data");
const Student = require("../models/data1");
const router = tec.Router();
//const router = std.Router();

const mongoose =require('mongoose');


//create mentor
 
router.post("/teacher", async(req, res) => {
        const mentor=await Mentor.create(req.body)
     res.json(mentor);
 });

//all techer 

router.get("/",async (req, res) =>{
    const mentors= await Mentor.find();
    res.json(mentors);
})

//create student
router.post("/student",async (req, res) =>{
    const students= await Student.create(req.body);
    res.json(students);
})
//all student 
router.get("/st",async (req, res) =>{
    const students= await Student.find();
    res.json(students);
})
//getting metor by id
router.get("/:techerid", async (req,res)=> {
    const mentorid = req.params.mentorId;
    const m = await Mentor.findById(mentorid)
    res.json(m);
});
//assign
    router.post("/assign:techerid:studentid", async (req,res)=> {
        const stid = req.params.studentId;
        const mid = req.params.mentorId;
        const assignedm = await A(m).create(req.body);
});
module.exports = router;