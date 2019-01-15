var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var Testemonial = require('./models/Testemonial');
var Email = require('./models/Email');

app.use(cors());

app.get("/testemonials", async(req, res) => {
    var testemonials = await Testemonial.find({});
    res.send(testemonials);
})

app.post("/testemonials", (req, res) => {
    var testemonialData = req.body;
    var testemonial = new Testemonial(testemonialData);
    
    testemonial.save((err, result) => {
        if (err) {
        console.log("error posting testemonial");
        }
    });
});

app.post('/email', (req, res) => {
    var emailData = req.body;
    var email = new Email(emailData);

    email.save((err, result) => {
        if (err) {
            console.log("Error sending email");
        }
    });
});


mongoose.connect('mongodb://admin:shoe4992@ds013941.mlab.com:13941/portfolio_db');

app.listen(3000);