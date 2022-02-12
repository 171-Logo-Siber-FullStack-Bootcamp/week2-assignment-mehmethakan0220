var posts = require("../../data/posts");

//get All posts
function getPosts(req,res){
    //send all posts to response
    res.send(posts);
    res.end();
}

//get post by id information
function getPostById(req,res){
    //find a user with req.param.id
    res.send(posts.find(e=>e.id==req.params.id));
    res.end();
}

//create a new post
function addPost(req,res){
    let newPost = req.body;
    //find existing post index with req.body.id information 
    let index = posts.findIndex(e=>e.id == newPost.id);
    //if index == -1; can create
    if(index !=-1){
        posts.push(newPost);
        res.send("OK")
    }else{//can't create
        res.send("Couldn't create!")
    }
    res.end();
}

//delete a post with id info
function deletePost(req,res){
    let id = req.params.id;
    //firstly check the user if exists
    let index = posts.findIndex(e=>e.id ==id);
    if(index !=-1){
        posts.splice(index,1);
        res.send("OK")
    }
    res.end();
}

//update a post with new values
function updatePost(req,res){
    let newValue = req.body;
    let index = posts.findIndex(e=>e.id == newValue.id);
    //if post is exists update it if not exitst trigger the else block. 
    if(index != -1){
        posts.slice(index,1,newValue);
        res.send("OK");
    }else{
        res.send("Post not found!")
    }
    res.end();
}

//exports
module.exports = {getPosts,getPostById,addPost, deletePost,updatePost};