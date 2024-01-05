const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');

//define port to use
let PORT = 3001;

//express app init 
const app = express();

//registering view engine
app.set('view engine' ,'ejs');

//app.set('views', __dirname);


//make connection to mongodb
const mongoClientURL ='mongodb://127.0.0.1:27017/crud';

mongoose.connect(mongoClientURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(result){
    app.listen(PORT,()=>{
        console.log("Server is running");
    })
}).catch(function(err){
    console.log(err);
});

app.get("/getUsers" , (req , res) => {
    User.find({})
    .then(function(users){
        res.json(users);
        console.log("Printing");
    }).catch(function(err){
        console.log(err);
    })
})

app.get('/display' , (req , res) =>{
    res.render('display');
})

