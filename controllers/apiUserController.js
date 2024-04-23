const User = require('../models/user')

const userControllerGet = (req , res) =>{
    User.find({})
    .then(function(users){
        res.json(users);
        console.log("Printing");
    }).catch(function(err){
        console.log(err);
    })
}


const displaySingleUserAPI = (req,res) => {
    const id = req.params.id;
    console.log(id);
    User.findById(id)
    .then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log(err);
        const data = {error:"User Not Found" , id:id};
        res.json(data);
    })
    
}

const userUpdateAPI = (req , res ) => {
    const id = req.params.id;
    console.log(id);
    User.findByIdAndUpdate(id ,{
        name:req.body.name,
        age:req.body.age,
        email:req.body.email
    }).then(result=>{
        res.json(result);
        console.log("Success");
    }).catch(err=>{
        console.log(err);
        res.json("error");
    })
}

const userDeleteAPI = (req , res ) => {
    const id = req.params.id;
    console.log(id);
    User.findByIdAndDelete(id)
    .then (result => {
        res.json(result);
        console.log("Success");
    }).catch(err=>{
        console.log("Error");
        res.json("Error");
    })
}

const postCreateUserAPI = (req , res) => {
    const user = new User(req.body);
    user.save()
    .then( result => {
        res.json(req.body);
        console.log("Success");
    }).catch(err=> {
        console.log(err);
        res.json("error");
    })
}

module.exports = {
    userControllerGet,
    displaySingleUserAPI,
    postCreateUserAPI,
    userUpdateAPI,
    userDeleteAPI,
}