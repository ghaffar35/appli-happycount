var app = angular.module('proApp', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: 'partials/home.html', controller: 'UsersCtrl'})
		.otherwise({redirectTo : '/'});
});