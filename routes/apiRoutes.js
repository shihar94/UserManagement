const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')
const userController = require('../controllers/userController');

router.get("/getUsers" , userController.userControllerGet);

//display single user by id using API
router.get('/displayUserAPI/:id' , userController.displaySingleUserAPI);


router.post("/postUserAPI", userController.postCreateUserAPI);

//update user using APi

router.put("/updateUserAPI/:id",userController.userUpdateAPI);

module.exports = router;