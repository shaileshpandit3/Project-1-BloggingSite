const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },
    fname: {
        type: String,
        trim: true,
        required: true
    },
    lname: {
        type: String,
        trim: true,
        required: true
    },
    
    email: {
       unique:true,
        type: String,
        lowercase: true,
        trim:true,
        required: true,
        //match: [/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']
        validate:{
            validator:function(email){return /^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/.test(email)},
            message: 'Please inter a valid email address.',
            isAsync: false
        }
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('author', authorSchema,'author')