angular.module("cadastroCapacitacao").controller("LoginCtrl", function($scope, $location, LoginApiService){
	
	var self = this;

	function loginSuccess(response){
		$location.path("/usuarios");
		//TODO adicionar o usuário à sessão.
		self.deleteError();
	}

	function error(response){
		self.error = response.data.message;
	}

	self.logout = function(){
		//TODO remover o usuario da sessão.
	}

	self.login = function(credenciais){
		LoginApiService.login(credenciais).then(loginSuccess, error);
	}

	self.deleteError = function(){
		delete self.error;
	}

});