angular.module("cadastroCapacitacao").service("TokenStorageService", function($localStorage, $q){

	this.getToken = function(){
		return $localStorage.token;
	}

	this.setToken = function(token){
		$localStorage.token = token;
	}

	this.removeToken = function(){
		delete $localStorage.token;
		$q.when();
	}
});