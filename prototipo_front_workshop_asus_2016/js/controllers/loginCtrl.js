angular.module("cadastroCapacitacao").controller("LoginCtrl", function($scope, AuthService){
	
	var self = this;

	self.login = function(credenciais){
		AuthService.login(credenciais);
	}

});