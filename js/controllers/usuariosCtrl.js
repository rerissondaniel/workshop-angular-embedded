angular.module("cadastroCapacitacao").controller("UsuariosCtrl", function(UsuariosApi){
	var self = this;
	self.usuarios = UsuariosApi.getUsuarios();

	self.remover = function(usuario){
		UsuariosApi.remover(usuario.id);
	}
});