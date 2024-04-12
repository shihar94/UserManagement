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

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

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


app.get("/getUsers" , (req , res) => {
    User.find({})
    .then(function(users){
        res.json(users);
        console.log("Printing");
    }).catch(function(err){
        console.log(err);
    })
})

app.get("" , (req, res) => {
    res.redirect("/displayUsers");
})

app.get('/display' , (req , res) =>{
    res.render('display');
})

app.get('/displayUsers' , (req , res) => {
    User.find({})
    .then(result => {
        res.render ('displayUsers' , {userList : result , title:"User List"})
    }).catch( err => {
        console.log(err);
    })
})

app.get('/createUsers' , (req , res) => {
    res.render('createUser' , {title:'Create New User'});
})

app.get('/error', (req, res) => {
    res.render('404' , {title: 'Blog not found'});
})

app.post('/createUsers' , (req , res) => {
    const user =  new User(req.body);
    user.save()
    .then(result=> {
        console.log("Success");
        res.redirect('/displayUsers');

    })
    .catch(err=>{
        console.log(err);
    })
})

app.get('/about' ,(req , res) => {
    res.render('about' , {title:"About"});
})

app.get('/delete/:id' , (req , res) => {
    const id = req.params.id;
    console.log(id);
    User.findByIdAndDelete(id)
    .then(result => {
        console.log(id);
        res.redirect('/displayUsers');
        //res.render('about' , {title:"About"});
        //res.render ('displayUsers' , {userList : result , title:"User List"})
    })
    .catch(err=>{
        console.log("Erros");
        console.log(err);
    })
})

app.get('/update/:id' , (req , res) => {
    const id = req.params.id;
    console.log(id);

    User.findOneAndUpdate(id)
    .then(result => {
        //console.log(id);
        res.redirect('/displayUsers');
        //res.render('about' , {title:"About"});
        //res.render ('displayUsers' , {userList : result , title:"User List"})
    })
    .catch(err=>{
        console.log("Erros");
        console.log(err);
    })
})

//display only one  user
app.get('/displayUser/:id' , (req , res) =>{
    const id = req.params.id;
    console.log(id);
    User.findById(id)
    .then(result => {
        res.render('displayOnlyUser' , {userList : result , title:"User List"})
        console.log(result.name + result.age + result.email);
        console.log("Success");
    }).catch(err=>{
        console.log(err);
    })
    //console.log(user.name);
    //res.redirect('/about');

})

module.exports = startServer;