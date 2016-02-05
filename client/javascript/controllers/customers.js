myApp.controller('customersController', function($scope,customerFactory){
			$scope.customers=[];
			function getCustomers(){
				customerFactory.getCustomers(function(data){
					$scope.customers = data;
				})
			}

			getCustomers();
			$scope.addCustomer = function(){
				customerFactory.addCustomers($scope.new_customer,getCustomers);
				$scope.new_customer={};
			}
			$scope.removeCustomer=function(customer){
				customerFactory.removeCustomer(customer,getCustomers);
			}
		})