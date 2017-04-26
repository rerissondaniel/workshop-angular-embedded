angular.module("cadastroCapacitacao").service("UsuariosApi", function($http, config){
	var self = this;
	var _usuarios = [{
			nome : "Rerisson Daniel Costa Silva Matos",
			dataNascimento : "25/12/1996",
			cpf : "113-314-274-52",
			telefone : "9999-9999",
			endereco : "sitio maria morais",
			email : "rerisson.matos@embedded.ufcg.edu.br", 
			role : "graduando", 
			coach : "Mirko",
			id : 1,
			role : "aluno"
		}, {
			nome : "Rerisson Daniel Costa Silva Matos", 
			idade : "22", 
			email : "rerisson.matos@embedded.ufcg.edu.br", 
			role : "graduando", 
			coach : "Mirko",
			id : 3,
			role : "coach"
		}, {
			nome : "Rerisson Daniel Costa Silva Matos", 
			idade : "25", 
			email : "rerisson.matos@embedded.ufcg.edu.br", 
			role : "graduando", 
			coach : "Mirko",
			id : 4,
			role : "aluno"
		}];

	self.getById = function(id){
		return self._usuarios.find(function(usuario){
			return usuario.id == id;
		});
	}

	self.getUsuarios = function(){
		return self._usuarios;
	}

	self.remover = function(id){
		var usuario = self._usuarios.find(function(usuario){
			return usuario.id == id;
		});

		var idx = self._usuarios.indexOf(usuario);
		if(idx > -1){
			self._usuarios.splice(idx, 1);
		}
	}
});