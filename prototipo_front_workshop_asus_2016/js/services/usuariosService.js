angular.module("cadastroCapacitacao").service("UsuariosApi", function($http, config){

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

	this.getById = function(id){
		return _usuarios.find(function(usuario){
			return usuario.id == id;
		});
	}

	this.getUsuarios = function(){
		return _usuarios;
	}

	this.remover = function(id){
		var usuario = _usuarios.find(function(usuario){
			return usuario.id == id;
		});

		var idx = _usuarios.indexOf(usuario);
		if(idx > -1){
			_usuarios.splice(idx, 1);
		}
	}
});