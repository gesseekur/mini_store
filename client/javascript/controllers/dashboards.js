myApp.controller('dashboardsController', function($scope, $routeParams,customerFactory){
	$scope.customers=[];
	$scope.products=[];
	$scope.orders=[];	
	$scope.limitProducts = 5;
	$scope.limitOrders = 3;
	$scope.limitCustomers = 3;


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

	$scope.showMoreProducts= function(){
		$scope.limitProducts +=  5;
	}
	$scope.showMoreOrders= function(){
		$scope.limitOrders +=  3;
	}
	$scope.showMoreCustomers= function(){
		$scope.limitCustomers +=  3;
	}
})