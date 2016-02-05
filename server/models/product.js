var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	name: String,
	quantity: Number,
	description:String,
	url: String,
	date: {type:Date, default:new Date()}
});

mongoose.model('Product', productSchema);