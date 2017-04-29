angular.module("cadastroCapacitacao").factory("AuthInterceptor").config(function($httpProvider){
	$httpProvider.interceptors.push(function ($location, $q){
		return {
			request : function(config){
				config.headers = config.headers || {};

				// if(TokenStorageService.getToken()){
				// 	config.headers["Authorization"] = TokenStorageService.getToken();
				// }

				return config;
			},

			responseError : function(response){
				if(response.status === 401 || response.status === 403){
					//TODO ver uma forma de adicionar o error à response.;
				}

				return $q.reject(response);
			}
		}
	});
});

