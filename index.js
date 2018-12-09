var app = angular.module('myApp', ['ngRoute']);

	app.controller('myCtrl', function($scope, $window){
		
		$scope.current_page = 'about';
		$scope.selectpage = function(page){
			$scope.current_page = page;
		}

		$scope.sandwich = [
			{category:'cheese', price:50, quantity:0 },
			{category:'paneer', price:65, quantity:0 },
			{category:'veg', price:40, quantity:0 },
			{category:'schezwan', price:50, quantity:0 },
			{category:'coleslaw', price:35, quantity:0 },
			{category:'masala', price:35, quantity:0 }
		]

		$scope.burger = [
			{category:'veg', price:45, quantity:0 },
			{category:'cheese', price:60, quantity:0 },
			{category:'paneer', price:50, quantity:0 }
		]

		$scope.coffee = [
			{category:'cold', price:50, quantity:0 },
			{category:'chocolate', price:60, quantity:0 }
		]

		$scope.inc_quan = function(x){
			x.quantity = x.quantity + 1;
		}

		$scope.dec_quan = function(x){
			if(x.quantity>0){
				x.quantity = x.quantity - 1;
			}
		}

		$scope.cart = []

		$scope.addtocart = function(x){
			$scope.cart.push(x);
			$window.alert("Item Added");
		}

		$scope.showbot = false;

		$scope.togglebot = function(){
			$scope.showbot = !$scope.showbot;
		}



	});	
