angular.module("cadastroCapacitacao").controller("ListarUsuariosCtrl", function($scope){
		$scope.usuarios = [{
			nome : "Rerisson Daniel Costa Silva Matos", 
			idade : "21", 
			email : "rerisson.matos@embedded.ufcg.edu.br", 
			role : "graduando", 
			coach : "Mirko"
		}, {
			nome : "Rerisson Daniel Costa Silva Matos", 
			idade : "22", 
			email : "rerisson.matos@embedded.ufcg.edu.br", 
			role : "graduando", 
			coach : "Mirko"
		}, {
			nome : "Rerisson Daniel Costa Silva Matos", 
			idade : "25", 
			email : "rerisson.matos@embedded.ufcg.edu.br", 
			role : "graduando", 
			coach : "Mirko"
		}];

		$scope.removerUsuario = function(usuario){
			console.log(usuario);
		}
});