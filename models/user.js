
const express= require("express");
const mongoose = require("mongoose");

async function main(){

await mongoose.connect(('mongodb://127.0.0.1:27017/cs'))
}
main()
.then(()=>{
    console.log("connected");
})
const userSchema = new mongoose.Schema({

    username :{
type:String
    },

    email :{
type:String
    },
password:{
    type :String,
}


})

const User = mongoose.model("User",userSchema);

module.exports = User;