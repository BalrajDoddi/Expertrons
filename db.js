const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://root:root@cluster0-xbn04.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err)=>{
    if (!err){
        console.log('MongoDB succeeded.');
    }
    else{
        console.log("Err : " + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;