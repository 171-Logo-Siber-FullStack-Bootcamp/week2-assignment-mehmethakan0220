//imports
const express = require("express");
const usersApi = require("./src/api/users/usersapi");
const postsApi = require("./src/api/posts/postsapi");
//create server
const server = express();
//port information for listening and communication.
const PORT = 5555;

//a middleware for json requests and controlling 
server.use(express.json(),(req,res,next)=>{
    let control = true;//try to change by false and send request
    if(control){
        //if control == true
        // request can jump the other endpoints like `/users => getUsers`
        next();
    }else{
        //if control == false
        // request cant jump the other endpoints
        res.send(`the request cant pass the middleware control ~'${req.url}'`);
        res.end();
    }
});

//users routes
server.get("/users",         usersApi.getUsers);
server.get("/users/:id",  usersApi.getUserById);
server.put("/users/update",usersApi.updateUser);
server.post("/users/add",     usersApi.addUser);
server.delete("/users/:id",usersApi.deleteUser);

//posts routes
server.get("/posts",         postsApi.getPosts);
server.get("/posts/:id",  postsApi.getPostById);
server.put("/posts/update",postsApi.updatePost);
server.post("/posts/add",     postsApi.addPost);
server.delete("/posts/:id",postsApi.deletePost);

//listen
server.listen(PORT,console.log(`Listening at ${PORT}`))