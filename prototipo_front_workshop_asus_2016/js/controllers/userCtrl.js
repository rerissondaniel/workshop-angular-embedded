angular.module("cadastroCapacitacao").controller("UserCtrl", function ($scope, $location, StudentsApiService) {
    var self = this;
    function success($location){
        $location.path("users");
    }

    // if (null != $routeParams.idUser) {
    //     self.user = UsuariosApi.getById($routeParams.idUser);
    // }

    self.setEditMode = function (editMode) {
        self.editMode = modoEdicao;
    }

    self.addUser = function (user) {
        console.log(self.editMode);
        StudentsApiService.addStudent(user).then(success, $scope.requestError);
    }
});