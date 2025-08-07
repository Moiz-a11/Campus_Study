

const express = require("express");

const app = express();
const mongoose = require("mongoose")
const ejs = require("ejs");
app.set("view engine", "ejs")
app.use(express.static("public"))
let User = require("./models/user.js");
let port = 3333;
app.use(express.urlencoded({extended:true}));
app.use(express.json()); // For JSON body

app.listen(port,()=>{
    console.log("listening")
})


app.get("/home",(req,res)=>{
res.render("navbar.ejs");


})

app.get("/notes",(req,res)=>{

    res.render("showNotes.ejs");
})



app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.post("/login",async(req,res)=>{
    let {username,email,password} = req.body;

    console.log(username)
    console.log(email)
    console.log(password)

let User1 =  new  User({username:username,email:email,password});
await User1.save();


})

app.get("/footer",(req,res)=>{
    res.render("footer.ejs");
})

