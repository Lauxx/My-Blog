angular.module("LoBlog", ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){

		$stateProvider
		.state('home', {
			url: '/codingLotus',
			templateUrl: './home.html'
		}).state('about', {
			url: '/aboutCodingLotus', 
			templateUrl: './about.html'
		}).state('contact', {
			url: '/contactCodingLotus',
			templateUrl: './contact.html'
		});

		$urlRouterProvider
		.otherwise('/codingLotus');
	});