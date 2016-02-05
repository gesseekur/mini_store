	var myApp = angular.module('myApp',['ngRoute']);
	myApp.config(function($routeProvider){
		$routeProvider
		.when('/customers', {
			templateUrl:'partials/customers.html'
		})
		.when('/orders', {
			templateUrl:'partials/orders.html'
		})
		.when('/dashboard', {
			templateUrl:'partials/dashboard.html'
		})
		.when('/products', {
			templateUrl:'partials/products.html'
		})
		.when('/settings', {
			templateUrl:'partials/settings.html'
		})
		.otherwise({
			redirectTo:'/customers'
		})
	});