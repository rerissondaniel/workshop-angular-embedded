angular.module("cadastroCapacitacao").controller("UserCtrl", function($scope, $routeParams, UsuariosApi){
	var self = this;
	if($routeParams.idUser != null){
		self.usuario = UsuariosApi.getById($routeParams.idUser);
	}
	
	self.setModoEdicao = function(editMode){
		self.editMode = modoEdicao;
	}

	self.addUser = function(user){
		
	}
});