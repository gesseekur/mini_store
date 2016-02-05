var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return {
		show: function(req,res) {
			Order.find({}, function(err,results){
				if(err) {
					console.log(err);
				}
				else {
					// console.log(results);
					res.json(results);
				}
			});
		},
		add: function(req,res){
			var order = new Order({name:req.body.name, product:req.body.product, quantity:req.body.quantity});
			// console.log(order);
			order.save(function(err,results){
				if(err){
					console.log('error');
				}
				else {
					console.log('success');
					res.json(true);
				}
			});
		}
	}
})();