angular.module("cadastroCapacitacao").controller("AuthCtrl", function ($scope, $location, $state, AuthService) {

    var self = this;

    function loginSuccess(response) {
        $scope.setCurrentUser(response.data.user);
        $location.path("/usuarios");
        $scope.deleteError();
    }

    self.logout = function () {
        AuthService.logout();
        $scope.currentUser = {};
        $state.go('login');
    }

    self.login = function (credenciais) {
        AuthService.login(credenciais).then(loginSuccess, $scope.requestError);
    };

    self.isAuthenticated = function () {
        AuthService.isAuthenticated();
    }
});