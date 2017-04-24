angular.module("cadastroCapacitacao").config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "view/login.html",
		controller : "LoginCtrl",
		controllerAs: "login"
	});

	$routeProvider.when("/usuarios", {
		templateUrl : "view/usuarios.html",
		controller : "ListarUsuariosCtrl",
		controllerAs : "listaUsuarios"
	});

	$routeProvider.when("/adicionar-usuario", {
		templateUrl : "view/adicionar-usuario.html",
		controller : "NovoUsuarioCtrl",
		controllerAs : "novoUsuario"
	});
});