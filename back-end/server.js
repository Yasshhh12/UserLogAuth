const express = require('express');
const connectDB = require('./db/dbConnection');
const app = express();
const port = 8000;
const User = require('./db/user');

connectDB();

app.use(express.json());


app.listen(port,()=>{
    console.log("Server is Listening");
})