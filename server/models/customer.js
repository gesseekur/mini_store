var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
	name: String,
	date: {type:Date, default:new Date()}
});

mongoose.model('Customer', customerSchema);