/**
 * Created by rohman on 5/27/16.
 */
var mongoose = require('mongoose');

var employee = new mongoose.Schema({
    nip       : String,
    name         : String,
    gender    :String,
    salary    : String
});

module.exports = mongoose.model('employees', employee);