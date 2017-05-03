angular.module("cadastroCapacitacao").controller("UserCtrl", function ($scope, $location, StudentsApiService) {
    var self = this;

    function success() {
        $scope.deleteError();
        $location.path("/usuarios");
    }

    self.requestError = function(error) {
        $scope.error = "Há campos obrigatórios não preenchidos e/ou inválidos.";
    }

    // if (null != $routeParams.idUser) {
    //     self.user = UsuariosApi.getById($routeParams.idUser);
    // }

    self.setEditMode = function (editMode) {
        self.editMode = editMode;
    }

    self.addUser = function (user) {
        StudentsApiService.addStudent(user).then(success, self.requestError);
    }
});