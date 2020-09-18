var express = require('express');
var router = express.Router();
var Users = require('./users');

router.post('/', function(req, res){
    console.log(req.body);
    
    let u = new Users({name: req.body.name});
    
    u.save((err,usr) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(usr);
    })  
})

router.get('/', function(req, res){
    
    Users.find().exec((err,usrs) => {

        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(usrs);
    })  
})