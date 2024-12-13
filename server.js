const express=require('express');

const mongoose=require('mongoose');
const registrationroutes=require('./routes/registration')
const app=express();
app.use(express.json());
// MY ATLAS DATABASE-MUKUL DEV
const URI='mongodb+srv://mukul:fKAkLWTZUx76igTz@cluster0.li0qt.mongodb.net/assignment?retryWrites=true&w=majority&appName=Cluster0'





app.use('/institute',registrationroutes);



mongoose.connect(URI).then(()=>{
    console.log('MongoDB connected');
    app.listen(3000,()=>{
        console.log("App is running on port 3000");
    })
}).catch(err=>console.log(err));

