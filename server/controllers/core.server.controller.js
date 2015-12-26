'use strict';

var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var options = {
    auth: {
        // sendgrid_password
        api_key: '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'
    }
};
console.log("data is trying here");

var mailer = nodemailer.createTransport(sgTransport(options));

//render main app page
exports.renderIndex = function(req,res) {
    res.render('server/views/index', {
        user: req.user || null
    })
};                                              //removed modules and core didn't exist in dir
//render server error page
exports.renderServerError = function(req, res) {
    res.status(500).render('server/views/500', {
        error: 'Opps! Something went wrong...?'
    });
};
//render server not found page
exports.renderNotFound = function(req, res) {
    res.status(404).render('server/views/404', {
        url: req.originalUrl
    });
};
//send an email when the contact form is submitted
// direct transport from nodemailer website best for using locally??
exports.sendMail = function(req, res) {
    console.log("sending email!!");
    var data = req.body;



//SENDGRID CODE FOR SMPT EMAIL SERVER
//    var email = {
//        to: ['karl@reclaimedartcraftsman.com'],
//        from: data.email,
//        subject: 'Message from ' + data.name,
//        text: data.message
//    };
//    console.log(email);
//
//    mailer.sendMail(email, function (err, res) {
//        if (err) {
//            console.log("send error", err)
//        }
//        console.log(res);
//    });
//    console.log("sending email!!");
//};


//for local email testing
    mailer.sendMail({
        from: data.contactEmail,
        to: 'karl@reclaimedartcraftsman.com',
        subject: 'Message from ' + data.contactName,
        text: data.contactMsg
    });

    res.json(data);
};