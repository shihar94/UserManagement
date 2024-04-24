const express = require("express");
const { route } = require("./UsersRoutes");
const userLogin = require("../models/loginSchema");
const router = express.Router();
const bcrypt = require('bcrypt');


router.get('/register' , (req,res)=>{
    res.render('Register',{title:'Register'});
});

router.post('/register', async (req,res)=>{
    
    const hashedPassword = await bcrypt.hash(req.body.password,10);

    const data = {
        username:req.body.username,
        password:hashedPassword,
    }

    console.log(data);
    
    const userdata = await userLogin.insertMany(data);
    res.redirect('/login');
    
})

router.get('/login' , (req, res) =>{
    res.render('login' , {title:"Login"});
})

router.post('/login' , async (req , res) => {
    
    const data = {
        username :req.body.username,
        password : req.body.password,
    }
    console.log(data);
    const existingUser = userLogin.findOne({username:data.username})
    .then(result=>{
        
        res.redirect('/displayUsers');

        
    })
    console.log(existingUser.username);
    if(existingUser){
        
    }

})


module.exports = router;