myApp.factory('customerFactory', function($http){
			var factory = {};
			var customers = [];
			var quantity = [];
			var newQ;
			var updateProducts ={};

			factory.getCustomers = function(callback) {
				$http.get('/customers').success(function(output){
					customers=output;
					callback(customers);
				});
			}
			factory.addCustomers = function(data,callback){
				$http.get('/customers').success(function(output){
					customers=output;
					if (customers.length == 0) {
						$http.post('/customers',data).success(callback)
					}
					else {
						for(var i =0;i<customers.length;i++){
							if(customers[i].name == data.name){
								alert('Sorry, no duplicate names')
								return;
							}
						}
					}
					$http.post('/customers',data).success(callback);
				});
			}

			factory.removeCustomer=function(data,callback){
				$http.delete('/customers/'+data._id).success(callback);
			}

			factory.getProducts = function(callback) {
				$http.get('/products').success(function(output){
				products=output;
				callback(products);
				});
			}	
			factory.getOrders = function(callback){
				$http.get('/orders').success(function(output){
					// console.log(output);
					orders=output;
					callback(orders);
				});
			}
			factory.addOrders = function(data,callback){
				$http.get('/products').success(function(output){
				products=output;
				
					for(var i=0; i<products.length;i++){

						if (products[i].name == data.product ) {
							console.log(products[i].quantity)
							if (products[i].quantity < data.quantity) {
								alert('There is not enough of this product in storage!');
								return; 
							}

							else {
								newQ = products[i].quantity - data.quantity;
								updateProducts ={name:products[i].name, quantity:newQ}
								$http.put('/products',updateProducts).success(callback);
							}
						}
					}
					// 	else {
					// 		alert('There is not enough of this product in storage!');
							
					// 	}
					// }
	
				$http.post('/orders',data).success(callback);
				});
			}
			return factory;
		});
