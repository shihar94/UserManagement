const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')
const userController = require('../controllers/userController');

router.get("/getUsers" , userController.userControllerGet);



router.get('/displayUsers' , userController.displayUsers)

router.get('/createUsers' , userController.getCreateUser);



router.get('/about' ,userController.getAbout);
    

router.get('/delete/:id' , userController.deleteUserbyId);

router.get('/update/:id' , userController.updateUserById);

//display only one  user
router.get('/displayUser/:id' , userController.displaySingleUser);
router.post('/createUsers' , userController.postCreateUser);

router.get('', userController.errorDisplay);

module.exports = router;