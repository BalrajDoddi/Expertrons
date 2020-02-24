const mongoose = require('mongoose');

var Mentor = mongoose.model('Mentor',{
    name:{
        type: String,
        required: true
    },
    working_at:{
        type:String,
        required: true
    },
    college:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required: true
    },
    sector:{
        type:String,
        required:true
    },
    posting:{
        type:String,
        required: true
    },
    CGPA:{
        type: Number,
        required:true
    },
    tenth_persentage:{
        type:Number,
        required:true
    },
    twelve_percentage:{
        type:Number,
        required:true
    },
    intership:{
        type:String
    },
    other_atchivements:{
        type:String
    },
    image:{
        type:String
    }
});


module.exports = { Mentor };