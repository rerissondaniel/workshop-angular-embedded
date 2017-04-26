angular.module("cadastroCapacitacao").config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "view/login.html",
		controller : "LoginCtrl",
		controllerAs: "loginCtrl"
	});

	$routeProvider.when("/usuarios", {
		templateUrl : "view/usuarios.html",
		controller : "UsuariosCtrl",
		controllerAs : "usuariosCtrl",
	});

	$routeProvider.when("/usuario/:idUsuario", {
		templateUrl : "view/usuario.html",
		controller : "UsuarioCtrl",
		controllerAs : "usuarioCtrl"
	});

	$routeProvider.when("/nao-encontrado", {
		templateUrl : "view/nao-encontrado.html",
	});

	$routeProvider.otherwise({redirectTo: "/nao-encontrado"})
});