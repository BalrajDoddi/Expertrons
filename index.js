const express = require("express");
const bodyparser = require("body-parser");

const { mongoose } = require('./db.js');
var MentorController = require('./controllers/MentorController')
var app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyparser.json());

app.listen(PORT, () =>{
    console.log('Server stated on : ' + PORT);
});


app.get('/', (req, res) =>{
    res.send("Hellow World");
});


app.use('/Mentor', MentorController);