const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')
const userController = require('../controllers/userController');

//this works in API postman returns all the avaialble users in the database
router.get("/getUsers" , userController.userControllerGet);

router.get("" , userController.usersRedirect);

router.get('/display' , userController.getDisplay);

router.get('/displayUsers' , userController.displayUsers)

router.get('/createUsers' , userController.getCreateUser);

router.get('/error', userController.errorDisplay);

router.post('/createUsers' , userController.postCreateUser);

router.get('/about' ,userController.getAbout);
    

router.get('/delete/:id' , userController.deleteUserbyId);

router.get('/update/:id' , userController.updateUserById);

//display only one  user
router.get('/displayUser/:id' , userController.displaySingleUser);


//display single user by id using API
router.get('/displayUserAPI/:id' , userController.displaySingleUserAPI);

//router.get('' , )

//Post a user using API
router.post("/postUserAPI", userController.postCreateUserAPI);

module.exports = router;