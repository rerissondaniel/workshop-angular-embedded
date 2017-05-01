angular.module("cadastroCapacitacao").controller("AppCtrl", function ($scope, USER_ROLES, AuthService) {
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };

    $scope.requestError = function (response) {
        if (response.data == null) {
            $scope.error = "Falha na comunicação com o servidor.";
        } else {
            $scope.error = response.data.message;
        }
    }

    $scope.deleteError = function () {
        delete $scope.error;
    }
});