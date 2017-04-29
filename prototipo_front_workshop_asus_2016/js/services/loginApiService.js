angular.module("cadastroCapacitacao").factory("LoginApiService", function($http, config){
	return {
		login : function(credentials){
			return $http.post(config.baseUrl + "auth", credentials);
		}
	}
});