angular.module("cadastroCapacitacao").controller("UserCtrl", function ($scope, $location, StudentsApiService) {
    var self = this;

    function success($location) {
        $location.path("users");
    }

    function requestError(){
        $scope.error = "Há campos obrigatórios não preenchidos e/ou inválidos.";
    }

    // if (null != $routeParams.idUser) {
    //     self.user = UsuariosApi.getById($routeParams.idUser);
    // }

    self.setEditMode = function (editMode) {
        self.editMode = editMode;
    }

    self.addUser = function (user) {
        console.log(user);
        StudentsApiService.addStudent(user).then(success, requestError);
    }
});