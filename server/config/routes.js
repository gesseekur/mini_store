var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products = require('./../controllers/products.js')

module.exports = function(app) {
	app.get('/customers', function(req,res){
		customers.show(req,res);
	});

	app.post('/customers', function(req,res){
		customers.add(req,res);
	});

	app.delete('/customers/:id', function(req,res){
		// console.log(req.body);
		customers.remove(req,res);
	});

	app.get('/orders', function(req,res){
		orders.show(req,res);
	});

	app.post('/orders', function(req,res){
		// console.log(req.body);
		orders.add(req,res);
	})

	app.get('/products',function(req,res){
		products.show(req,res);
	})

	app.post('/products',function(req,res){
		products.add(req,res);
	})

	app.put('/products', function(req,res){
		// console.log(req.body);
		products.update(req,res);
	})
};