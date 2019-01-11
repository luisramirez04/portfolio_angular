var mongoose = require('mongoose');

module.exports = mongoose.model('Testemonial', {
    name: String,
    comments: String, 
    email: String,
    phone: String
});