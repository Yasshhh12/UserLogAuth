const express = require('express');
const connectDB = require('./db/dbConnection');
const app = express();
const port = 8000;
const User = require('./db/user');

connectDB();

app.use(express.json());

//registration
app.post('/register',async(req,res)=>{
    try {
        const {username,password} = req.body;
        console.log(req.body);
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'Registration Succesful'});
    } 
    catch (error) {
        res.status(500).json({error:'Registration failed'});  
    }
})


app.listen(port,()=>{
    console.log("Server is Listening");
})