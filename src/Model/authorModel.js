const mongoose = require("mongoose")

const authorModel = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },


    emailId: {
        type: String,
        trim: true,
        lowercase:true,
        required: true,
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please provide your email address."]
    },
    password: {
        type: String,
        required: true,
        match:[/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9a-zA-Z]).{8,}$/,"Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long"],
        
    },
    


}, {timestamps:true})

module.exports = mongoose.model("Author", authorModel)