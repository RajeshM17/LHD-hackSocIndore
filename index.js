var app = angular.module('myApp', ['ngRoute']);

	app.controller('myCtrl', function($scope){
		
		$scope.current_page = 'order';
		$scope.selectpage = function(page){
			$scope.current_page = page;
		}

		$scope.sandwich = [
			{category:'cheese', price:50 },
			{category:'paneer', price:65 },
			{category:'veg', price:40 },
			{category:'schezwan', price:50 },
			{category:'coleslaw', price:35 },
			{category:'masala', price:35 }
		]

		$scope.burger = [
			{category:'veg', price:45 },
			{category:'cheese', price:60 },
			{category:'paneer', price:50 }
		]

		$scope.coffee = [
			{category:'cold', price:50 },
			{category:'chocolate', price:60 }
		]



	});	
