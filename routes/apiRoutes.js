const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')
const APIuserController = require('../controllers/apiUserController');

router.get("/getUsers" , APIuserController.userControllerGet);

//display single user by id using API
router.get('/displayUserAPI/:id' , APIuserController.displaySingleUserAPI);


router.post("/postUserAPI", APIuserController.postCreateUserAPI);

//update user using APi

router.put("/updateUserAPI/:id",APIuserController.userUpdateAPI);

//delete user by API
router.delete("/deleteUser/:id" ,APIuserController.userDeleteAPI);

module.exports = router;