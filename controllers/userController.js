const User = require('../models/user')



const displayUsers = (req , res) => {
    User.find({})
    .then(result => {
        res.render ('displayUsers' , {userList : result , title:"User List"})
    }).catch( err => {
        console.log(err);
    })
}

const postCreateUser = (req , res) => {
    const user =  new User(req.body);
    user.save()
    .then(result=> {
        console.log("Success");
        res.redirect('/displayUsers');

    })
    .catch(err=>{
        console.log(err);
    })
}


const getCreateUser = (req , res) => {
    res.render('createUser' , {title:'Create New User'});
}



const deleteUserbyId = (req , res) => {
    const id = req.params.id;
    console.log(id);
    User.findByIdAndDelete(id)
    .then(result => {
        console.log(id);
        res.redirect('/displayUsers');
        //res.render('about' , {title:"About"});
        //res.render ('displayUsers' , {userList : result , title:"User List"})
    })
    .catch(err=>{
        console.log("Erros");
        console.log(err);
    })
}

const displayUserById = (req , res) => {
    const id = req.params.id;
    console.log(id);
    console.log("Accessing Update User ID Function");
    User.findById(id)
    .then(result=>{
        //res.json(result);
        console.log("Printing the result");
        console.log(result.name + result.age + result.email);
        console.log("End Printing the result");
        res.render ('singleUser' , {userList : result , title:"User " + id + " " + result.name});
        //res.redirect('/displayUsers');
    }).catch(err=>{
        console.log(err);
    })



    
}



const errorDisplay = (req , res) => {
    res.render('404' , {title: 'Blog not found'});
}

const getAbout = (req , res) => {
    res.render('about' , {title:"About"});
}




module.exports = {
    displayUsers,
    postCreateUser,
    getCreateUser,
    deleteUserbyId,
    displayUserById,
    errorDisplay,
    getAbout,
}