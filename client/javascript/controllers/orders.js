myApp.controller('ordersController', function($scope, customerFactory){
			$scope.customers=[];
			$scope.orders=[];
			function getCustomers(){
				customerFactory.getCustomers(function(data){
					$scope.customers = data;
				})
			}
			getCustomers();

			function getOrders(){
				customerFactory.getOrders(function(data){
					$scope.orders = data;
					// console.log($scope.orders);
				});
			}
			getOrders();

			function getProducts(){
				customerFactory.getProducts(function(data){
					$scope.products = data;
					// console.log($scope.products);
				})
			}
			getProducts();

			$scope.addOrders = function(){
				// console.log($scope.new_order);
				customerFactory.addOrders($scope.new_order, getOrders);
				$scope.new_order={};
			}
		})
