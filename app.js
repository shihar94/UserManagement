const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UsersRoutes');
require('dotenv').config();
console.log(process.env.PORT);


//define port to use
let PORT = process.env.PORT;

//express app init 
const app = express();

//registering view engine
app.set('view engine' ,'ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('',userRoutes);

//make connection to mongodb
//const mongoClientURL = process.env.MONGO_URL;
const mongoClientURL = process.env.MONGO_ATLAS_URL;

const startServer = async(port) => {
    mongoose.connect(mongoClientURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result){
    app.listen(PORT,()=>{
        console.log("Server is running");
    })
    }).catch(function(err){
        console.log(err);
    });
}



module.exports = startServer;