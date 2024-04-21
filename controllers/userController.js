const User = require('../models/user')

const userControllerGet = (req , res) =>{
    User.find({})
    .then(function(users){
        res.json(users);
        console.log("Printing");
    }).catch(function(err){
        console.log(err);
    })
}

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

const postCreateUserAPI = (req , res) => {
    const user = new User(req.body);
    user.save()
    .then( result => {
        res.json(req.body);
        console.log("Success");
    }).catch(err=> {
        console.log(err);
        res.json("error");
    })
}

const getCreateUser = (req , res) => {
    res.render('createUser' , {title:'Create New User'});
}

const getDisplay = (req , res) => {
    res.render('display');
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

const updateUserById = (req , res) => {
    const id = req.params.id;
    console.log(id);

    User.findOneAndUpdate(id)
    .then(result => {
        //console.log(id);
        res.redirect('/displayUsers');
        //res.render('about' , {title:"About"});
        //res.render ('displayUsers' , {userList : result , title:"User List"})
    })
    .catch(err=>{
        console.log("Erros");
        console.log(err);
    })
}

const displaySingleUserAPI = (req,res) => {
    const id = req.params.id;
    console.log(id);
    User.findById(id)
    .then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log(err);
        const data = {error:"User Not Found" , id:id};
        res.json(data);
    })
    
}

const displaySingleUser = (req , res) => {
    const id = req.params.id;
    console.log(id);
    User.findById(id)
    .then(result => {
        res.json(result);
        res.render('displayOnlyUser' , {userList : result , title:"User List"})
        console.log(result.name + result.age + result.email);
        console.log("Success");
    }).catch(err=>{
        console.log(err);
        
    })
    //console.log(user.name);
    //res.redirect('/about');
}

const errorDisplay = (req , res) => {
    res.render('404' , {title: 'Blog not found'});
}

const getAbout = (req , res) => {
    res.render('about' , {title:"About"});
}

const usersRedirect = (req , res) => {
    res.redirect("/displayUsers");
}

module.exports = {
    userControllerGet,
    displayUsers,
    postCreateUser,
    getCreateUser,
    getDisplay,
    deleteUserbyId,
    updateUserById,
    displaySingleUser,
    errorDisplay,
    getAbout,
    usersRedirect,
    displaySingleUserAPI,
    postCreateUserAPI,
}