const express = require("express");
const { route } = require("./UsersRoutes");
const router = express.Router();


router.get("" , (req,res)=>{
    res.render('login',{title:'Log In'});
});

module.exports = router;