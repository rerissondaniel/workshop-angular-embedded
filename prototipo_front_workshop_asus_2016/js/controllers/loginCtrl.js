angular.module("cadastroCapacitacao").controller("LoginCtrl", function ($scope, $location, AuthService) {

    var self = this;

    function loginSuccess(response) {
        $scope.setCurrentUser(response.data.user);
        $location.path("/usuarios");
        $scope.deleteError();
    }

    self.logout = function () {
        AuthService.logout();
    }

    self.login = function (credenciais) {
        AuthService.login(credenciais).then(loginSuccess, $scope.requestError);
    }

    self.isAuthenticated = function () {
        AuthService.isAuthenticated();
    }
});