
// 
const Institute=require('../models/Institute');



const express=require("express");


const router=express.Router();


router.post('/register',async(req,res)=>{
    const {name,type}=req.body;

    try
    {
        const institute=new Institute({name,type});
    await institute.save();
    res.status(201).json({message:"Institute registered successfully",institute})
    }
    catch(error){
       res.status(500).json({message:"Error registering institute",error});

    }


});


router.get("/school-details",async(req,res)=>{
    try{
        const boards=await Board.find();
        const standard=await Standard.find();
    res.status(200).json({boards,standard});
    }
    
    catch(error){
        res.status(500).json({message:"Error fetching school details",error});

    }
});


router.get("/college-details",async(req,res)=>{
    try{
        const universities= await University.find();
    res.status(200).json(universities);
    }
    catch(error){
        res.status(500).json({message:"Error fetching college details",error});

    }

})



router.get("exam-details",async(req,res)=>{
    

    try{
        const examType=await ExamType.find();
        res.status(200).json(examType);
    }
    catch(error){
        res.status(500).json({message:"Error fetching college details",error});

    }
})


module.exports=router;