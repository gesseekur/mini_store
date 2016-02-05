myApp.factory('productFactory', function($http){
	var product = [];
	var factory = {};

	factory.getProducts = function(callback) {
		$http.get('/products').success(function(output){
			products=output;
			callback(products);
		});
	}

	factory.addProducts = function(data,callback){
		$http.post('/products',data).success(callback);
	}

	return factory;
});
