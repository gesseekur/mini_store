myApp.controller('productsController', function($scope, productFactory){
			$scope.products =[];
			function getProducts(){
				productFactory.getProducts(function(data){
					$scope.products = data;
				})
			}

			getProducts();
			$scope.addProduct = function(){
				productFactory.addProducts($scope.new_product,getProducts);
				$scope.new_product={};
			}
})

