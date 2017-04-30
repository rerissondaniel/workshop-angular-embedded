angular.module("cadastroCapacitacao").controller("StudentsCtrl", function($scope, StudentsApiService){
	var self = this;
	
	function success(response){
		self.users = response.data;
	}

	StudentsApiService.getStudents().then(success, $scope.requestError);
});