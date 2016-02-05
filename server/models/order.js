var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	name:String,
	product:String,
	quantity:Number,
	date:{type:Date,default: new Date()}
});

mongoose.model('Order', orderSchema);