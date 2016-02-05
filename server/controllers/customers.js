var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return {
		show: function(req,res) {
			Customer.find({}, function(err,results){
				if(err) {
					console.log(err);
				}
				else {
					res.json(results);
				}
			});
		},
		add: function(req,res){
			var customer = new Customer({name:req.body.name});
			customer.save(function(err,results){
				if(err) {
					console.log('error in saveCustomer');
				}
				else {
					res.json(true);
				}
			});
		},
		remove: function(req,res){
			Customer.remove({_id:req.params.id}, function(err,results){
				if(err){
					console.log('error');
				}
				else {
					res.json(true);
				}
			})
		}
	}
})();