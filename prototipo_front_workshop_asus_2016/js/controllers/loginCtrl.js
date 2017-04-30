angular.module("cadastroCapacitacao").controller("LoginCtrl", function($scope, $location, AuthService){
	
	var self = this;

	function loginSuccess(response){
		$scope.setCurrentUser(response.data.user);
		if($scope.currentUser.role == $scope.userRoles.coach){
			$location.path("/alunos");
		}else{
			$location.path("/coaches");
		}
		$scope.deleteError();
	}

	self.logout = function(){
		AuthService.logout();
	}

	self.login = function(credenciais){
		AuthService.login(credenciais).then(loginSuccess, $scope.requestError);
	}

});