angular.module("cadastroCapacitacao").service("AuthService", function($http, config, TokenStorageService){
	var self = this;
	self.login = function(credentials){
		return $http.post(config.baseUrl + "auth", credentials);
	}

	self.logout = function(credentials){
		//TODO
		return $http.post(config.baseUrl + "");
	}
});