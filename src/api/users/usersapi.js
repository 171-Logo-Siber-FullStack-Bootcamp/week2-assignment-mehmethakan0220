var users = require("../../data/users");

//get all users
function getUsers(req,res){
    //send all users to response
    res.send(users);
    res.end();
}

//get user by id info
function getUserById(req,res){
    //find spesific user by req.id and send it to response.
    res.send(users.find(e=>e.id==req.params.id));
    res.end();
}

//create a new user with req.body info
function addUser(req,res){
    let newUser = req.body;//handle new user from req.body
    //control the new user id
    let index = users.findIndex(e=>e.id== newUser.id);
    //if user.id exists, dont create
    if(index == -1){
    users.push(newUser);
    res.send("OK")
    }else{//if newUser.id == existingUser.id
        res.send("Couldn't create!")
    }
    res.end();
}

//update an existing user with req.body info
function updateUser(req,res){
    let newUser = req.body;// 
    //find index of existing user by id information 
    let index = users.findIndex(e=>e.id == newUser.id);
    if(index != -1){// if index == -1 user not found exeption.
        users.splice(index,1,newUser);//replace 1 object spesicified index with newUser object 
        res.send("OK");
    }else{
        res.send("Couldn't update! User not found!")//if user not exists.
    }
    res.end();    
}

//delete an existing user by req.boyd.id info
function deleteUser(req,res){
    //find existing user (if exist return index if not exist return -1)
    let index = users.findIndex(e=>e.id == req.params.id);
    if(index!=-1){
        users.splice(index,1);//delete 1 item at index 
        res.send("OK");
    }else{
        res.send("Not found!")//if user not exists
    }
    res.end()
}


//exporting the functions
module.exports ={getUsers,getUserById,addUser,updateUser,deleteUser}