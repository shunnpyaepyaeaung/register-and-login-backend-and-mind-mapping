const { createUser, viewUsers, updateUsername, updatePassword, getUserByUsername} = require("../model/userModel");
const bcrypt = require('bcrypt');


const registerUser = async (req,res) => {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var username = req.body.username;
    var email = req.body.email;
    var password = await bcrypt.hash(req.body.password,10);
    var user = await createUser(firstname,lastname,username,email,password);
    res.json(user)
}

const viewAllUsers = async (req, res) =>{
    var user = await viewUsers();
    res.json(user)
}

const updateuserByUsername = async (req,res) => {
    var id = +req.body.id;
    var newusername = req.body.newusername;
    var user = await updateUsername(id, newusername);
    res.json(user);
}

const changePassword = async (req, res) => {
    var id = req.body.id;
    var newpassword = await bcrypt.hash(req.body.newpassword,10);
    var user = await updatePassword(id,newpassword);
    res.json(user);
}

const login = async (req,res) => {
    var username = req.body.username;
    var password = req.body.password;
    var userInfo = getUserByUsername(username);
    if(userInfo.length > 0){
        var result = await bcrypt.compare(password,userInfo[0].password);
        if(result){
            res.json("Login Success");
        }else{
            res.json("Incorrect Username or Password");
        }
    }else{
        res.json('There is no user in the userlist!')
    }
}

module.exports = {registerUser, viewAllUsers, updateuserByUsername, changePassword, login}