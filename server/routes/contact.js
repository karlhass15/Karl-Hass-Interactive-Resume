

var express = require('express');
var router = express.Router();
var mailer = require('../controllers/core.server.controller');

console.log("server mailer: ", mailer);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect call in server/app.js with mongod process.env
mongoose.model('Email', new Schema({"contactName": String, "contactEmail": String, "contactMsg": String},
    {collection: 'email'}));
var Email = mongoose.model('Email');


router.post('/', function(req, res) {
    console.log("contact route!");


    var addedContact = new Email({
        "contactName" : req.body.contactName,
        "contactEmail": req.body.contactEmail,
        "contactMsg" : req.body.contactMsg
    });

    addedContact.save(function(err, data){
        if(err) console.log(err);

    });

    mailer.sendMail(req, res);
});


module.exports = router;

