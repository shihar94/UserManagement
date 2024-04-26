const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UsersRoutes');
const userLogin = require('./models/loginSchema');
const loginRoutes = require('./routes/loginRoutes');
const apiRoutes = require('./routes/apiRoutes');
const bcrypt = require('bcrypt');
const passport = require("passport")
const localStrategy		= require('passport-local').Strategy;

const flash = require("express-flash")
const methodOverride = require("method-override")
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
app.use(express.json());
const MongoStore = require('connect-mongo');
const session = require('express-session');
  
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({mongoUrl: process.env.MONGO_URL})
}))
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

//app.use('',userRoutes);
app.use('/',loginRoutes);
//app.use('/api/v1',apiRoutes);

app.use(flash())




const mongoClientURL = process.env.MONGO_URL;
//const mongoClientURL = process.env.MONGO_ATLAS_URL;




//make connection to mongodb
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