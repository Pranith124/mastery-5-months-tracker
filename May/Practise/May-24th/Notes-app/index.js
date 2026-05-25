
const express = require("express");
const path = require("path");

const app=new express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));

const todo_list=["Hello there","Awesome day"];
// post a to-do request.

app.post("/note",function(req,res){
    const description = req.body.note;

    todo_list.push(description);
    return res.status(200).json({
        message:"todo is created",
    })
})


// get all to-do requests

app.get("/notes",function(req,res){

    return res.status(200).json({
        notes:todo_list 
    })
})


// geting homa-page
app.get("/",function(req,res){
    return res.sendFile(path.join(__dirname,"frontend","index.html"));
})


app.listen(3000);