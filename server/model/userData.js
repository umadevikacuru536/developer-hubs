const mongoose = require("mongoose");



const usersData= new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    skills:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true,
    },
   


})
module.exports =mongoose.model('usersData', usersData)