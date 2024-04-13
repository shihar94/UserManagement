const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UsersRoutes');



//define port to use
let PORT = 3001;

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
const mongoClientURL ='mongodb://127.0.0.1:27017/crud';


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