const mongoose=require('mongoose');

const standardSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    class_category:{
        type:String,
        enum:["Pre-primary","Primary","Secondary","Higher Secondary"]
    }
 
});


module.exports=mongoose.model("standard",standardSchema);