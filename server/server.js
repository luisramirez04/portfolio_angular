var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var Testemonial = require('./models/Testemonial');
var Email = require('./models/Email');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cors());

app.get("/testemonials", async(req, res) => {
    var testemonials = await Testemonial.find({});
    res.send(testemonials);
})

app.post("/testemonials", (req, res) => {
    let testemonialData = req.body; 
    let testemonial = new Testemonial(testemonialData);
    testemonial.save((err, result) => {
        if (!err) {
        res.status(200).json({"testemonial": "Testemonial added successfully"});
        }
    })
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


mongoose.connect('mongodb://guest:guest1password@ds013941.mlab.com:13941/portfolio_db');

app.listen(3000);