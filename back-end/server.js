const express = require('express');
const connectDB = require('./db/dbConnection');
const app = express();
const port = 8000;
const User = require('./db/user');
const cors = require('cors');

connectDB();

//middleware
app.use(express.json());

app.use(cors());

//registration
app.post('/register',async(req,res)=>{
    try {
        const {username,password} = req.body;
        console.log(req.body);
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'Registration Successful'});
    } 
    catch (error) {
        res.status(500).json({error:'Registration failed'});  
    }
})

app.post('/login',async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error:'Invalid username or Password'});
        }
        res.status(200).json({message:'Login Successful'});

    } catch (error) {
        res.status(500).json({error:'Login failed'});
    }
})


app.listen(port,()=>{
    console.log("Server is Listening");
})