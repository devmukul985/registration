const mongoose=require('mongoose');

const universitySchema=mongoose.Schema({
   

    name:{
        type:String,
        required:true
    }
 
});


module.exports=mongoose.model("University",universitySchema);