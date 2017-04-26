angular.module("cadastroCapacitacao").service("AuthService", function($http, TokenStorageService){
	var self = this;
	self.login = function(credenciais){
		console.log(credenciais);
	}

	self.logout = function(credenciais){
		console.log(credenciais + "saiu");
	}
});