const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/mydatabase');
        console.log('Connected to mongoDB !!');
    }
    catch{
        console.log('Got an error');
    }
}

module.exports = connectDB;