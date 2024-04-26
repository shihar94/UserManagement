const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserLoginSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    
},{timestamps:true});

const Login = mongoose.model("UserLogin" , UserLoginSchema);
module.exports = Login;