var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function(){
	return {
		show: function(req,res){
			Product.find({}, function(err,results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			});
		},
		add: function(req,res){
			var products = new Product({name:req.body.name, description:req.body.description, url:req.body.url,quantity:req.body.quantity});
			products.save(function(err,results){
				if(err){
					console.log('error in addProduct');
				}
				else{
					res.json(true);
				}
			})
		},
		update: function(req,res){
			Product.update({name:req.body.name},{$set:{quantity:req.body.quantity}}, function(err,results){
				if(err){
					console.log(err);
				}
				else{
					res.json(true);
				}
			})
		}
	}
})();