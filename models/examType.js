const mongoose=require('mongoose');

const examTypeSchema=new mongoose.Schema({
   
    standard_id:{//relating to other schema
        type:mongoose.Schema.Types.ObjectId,
        ref:"Standard",
        required:true

    },
    name:{
        type:String,
        required:true
    }
 
});


module.exports=mongoose.model("ExamType",examTypeSchema);