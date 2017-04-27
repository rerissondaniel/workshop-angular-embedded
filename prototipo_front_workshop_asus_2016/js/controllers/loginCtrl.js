angular.module("cadastroCapacitacao").controller("LoginCtrl", function($scope, $location, AuthService, TokenStorageService){
	
	var self = this;

	function loginSuccess(response){
		$location.path("/users");
		TokenStorageService.setToken(response.data.token);
		self.deleteError();
	}

	function error(response){
		self.error = response.data.message;
	}

	self.login = function(credenciais){
		AuthService.login(credenciais).then(loginSuccess, error);
	}

	self.deleteError = function(){
		delete self.error;
	}

});