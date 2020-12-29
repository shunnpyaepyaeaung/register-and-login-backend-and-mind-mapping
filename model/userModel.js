let userList = [];

const createUser = (firstname,lastname,username,email,password)=>{
    userList = [...userList, {id: Date.now(), firstname, lastname, username, email, password}]
    return userList;
}

const viewUsers = ()=>{
    return userList;
}

const updateUsername = (id, newusername) => {
    userList = userList.map(e=>{
        if(e.id == id){
            e.username = newusername;
        }
        return e;
    })
    return userList;
}

const updatePassword = async(id, newpassword) => {
    userList = userList.map(e => {
        if(e.id = id) {
            e.password = newpassword;
        }
        return e;
    })
    return userList;
}

const getUserByUsername = (username) => {
    userList = userList.filter(e => e.username === username);
    return userList;
}

module.exports = {createUser, viewUsers, updateUsername, updatePassword, getUserByUsername}