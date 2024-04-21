const express = require("express");
const { route } = require("./UsersRoutes");
const userLogin = require("../models/loginSchema");
const router = express.Router();


router.get("/register" , (req,res)=>{
    res.render('Register',{title:'Register'});
});

router.post("/register", async (req,res)=>{
    
    const data = {
        username:req.body.username,
        password:req.body.password,
    }
        
    const existingUser = userLogin.findOne({username:data.username});
    if(existingUser){
        
    }else{
        const userdata = await userLogin.insertMany(data);
    }
})

router.get("/login" , (req, res) =>{
    res.render('login' , {title:"login"});
})

router.post("/login" , async (req , res) => {
    
    const data = {
        username :req.body.username,
        password : req.body.password,
    }
    console.log(data);
    const existingUser = userLogin.findOne({username:data.username})
    .then(result=>{
        if(data.password == result.password){
            res.redirect('/displayUsers');

        }
    })
    console.log(existingUser.username);
    if(existingUser){
        
    }

})


module.exports = router;