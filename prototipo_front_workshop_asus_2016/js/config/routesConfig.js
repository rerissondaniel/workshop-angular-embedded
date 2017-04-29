angular.module("cadastroCapacitacao").config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise("/nao-encontrado");

	$stateProvider.state("home", {
		url : "/login",
		templateUrl : "view/login.html",
		controller : "LoginCtrl",
		controllerAs : "loginCtrl"
	});
});