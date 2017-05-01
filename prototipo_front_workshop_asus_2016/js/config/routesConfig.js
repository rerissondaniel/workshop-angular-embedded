angular.module("cadastroCapacitacao").config(function($stateProvider, $urlRouterProvider, $locationProvider, USER_ROLES){

	$urlRouterProvider.otherwise("nao-encontrado");

	$stateProvider.state("login", {
		url : "/",
		templateUrl : "view/login.html",
		controller : "LoginCtrl",
		controllerAs : "loginCtrl"
	});

	$stateProvider.state("students", {
		url : "/alunos",
		templateUrl : "view/users.html",
		controller : "StudentsCtrl",
		controllerAs : "usersCtrl",
		data : {
			authorizedRoles : [USER_ROLES.coach]
		}
	});

	$stateProvider.state("not-found", {
		url : "/nao-encontrado",
		templateUrl : "view/not-found.html",
	});


	$stateProvider.state("not-authorized", {
		url : "/nao-autorizado",
		templateUrl : "view/not-authorized.html",
	});

	$stateProvider.state("add-user", {
		url : "/adicionar-usuario",
		templateUrl : "view/coach/add-user.html",
		data : {
			authorizedRoles : [USER_ROLES.coach]
		}
	});
})

.run(function($rootScope, $location, AUTH_EVENTS, AuthService){
	$rootScope.$on('$stateChangeStart', function(event, next){
		if(next.data){
			var authorizedRoles = next.data.authorizedRoles;
			if(!AuthService.isAuthorized(authorizedRoles)){
				$location.path("/nao-autorizado").replace();
			}
		}
	});
});