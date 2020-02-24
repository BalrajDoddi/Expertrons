const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Mentor } = require('../models/Mentor');

router.get('/', (req, res) => {
    Mentor.find((err,docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Err : ' + JSON.stringify(err, undefined, 2)) }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${ req.params.id}`);

    Mentor.findById(req.params.id, (err, docs) =>{
        if(!err) {res.send(docs);}
        else{ console.log('Err : ' + JSON.stringify(err, undefined, 2));}
    });
});

router.post('/', (req, res) =>{
    var mentor = new Mentor({
        name: req.body.name,
        working_at: req.body.working_at,
        college: req.body.college,
        degree: req.body.degree,
        sector: req.body.sector,
        posting: req.body.posting,
        CGPA: req.body.CGPA,
        tenth_persentage: req.body.tenth_persentage,
        twelve_percentage: req.body.twelve_percentage,
        intership: req.body.intership,
        other_atchivements: req.body.other_atchivements,
        image: req.body.image
    });

    mentor.save((err, docs) => {
        if(!err) { res.send(docs); }
        else{ console.log('Err : '+ JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    var mentor = {
        name: req.body.name,
        working_at: req.body.working_at,
        college: req.body.college,
        degree: req.body.degree,
        sector: req.body.sector,
        posting: req.body.posting,
        CGPA: req.body.CGPA,
        tenth_persentage: req.body.tenth_persentage,
        twelve_percentage: req.body.twelve_percentage,
        intership: req.body.intership,
        other_atchivements: req.body.other_atchivements,
        image: req.body.image
    };

    Mentor.findOneAndUpdate(req.params.id, { $set: mentor }, {new : true}, (err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Err : ' + JSON.stringify(err, undefined, 2));}
    });
});



router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given Id: ${ req.params.id }`);

    Mentor.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Err : '+ JSON.stringify(err,undefined,2));}
    })
})


module.exports = router;