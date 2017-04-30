angular.module("cadastroCapacitacao").service("StudentsApiService", function($http, AppConfig){
	this.getStudents = function(){
		return $http.get(AppConfig.baseUrl + "student");
	}
});