const mongoose = require('mongoose');
//const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const UserLogin = require('../models/loginSchema');

module.exports = async (req,res) => {
    try{
        const ifExists = await UserLogin.findOne({ name:req.body.name })
        if (ifExists)
            return res.send('<h1>Username already exists.</h1><p>Please <a href="/register">register</a> with another username</p>');
        const user = new UserLogin({
            name:req.body.name,
            password: bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
        })
        await user.save()
        console.log(user);
        return res.redirect('/login');
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal Server Error')
    }
}
