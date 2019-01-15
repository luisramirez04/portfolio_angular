var mongoose = require('mongoose');

module.exports = mongoose.model('Email', {
    email: String
});