const mongoose=require('mongoose');

const InstituteTypeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:[ "Playhouse" ,"School" ,"College" ,"Competitive Exam Center "],
        required:true
    }
});


module.exports=mongoose.model("institute",InstituteTypeSchema);