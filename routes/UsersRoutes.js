const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')
const userController = require('../controllers/userController');




router.get('/displayUsers' , userController.displayUsers)

router.get('/createUsers' , userController.getCreateUser);



router.post('/createUsers' , userController.postCreateUser);

router.get('/about' ,userController.getAbout);
    

router.get('/delete/:id' , userController.deleteUserbyId);

router.get('/:id' , userController.displayUserById);

router.get('/:id' , userController.displayUserById);

router.post('/:id' , userController.updateUserID)

router.get('', userController.errorDisplay);

module.exports = router;