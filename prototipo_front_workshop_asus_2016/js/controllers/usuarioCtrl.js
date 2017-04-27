angular.module("cadastroCapacitacao").controller("UsuarioCtrl", function($scope, $routeParams, UsuariosApi){
	var self = this;
	self.modoEdicao = false;
	self.usuario = UsuariosApi.getById($routeParams.idUsuario);
	
	self.setModoEdicao = function(modoEdicao){
		self.modoEdicao = modoEdicao;
	}

	self.salvar = function(usuario){
		
	}
});