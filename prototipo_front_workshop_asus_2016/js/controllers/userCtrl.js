angular.module("cadastroCapacitacao").controller("UserCtrl", function ($scope, $location, $stateParams, StudentsApiService) {
    var self = this;

    function successAddStudent() {
        $scope.deleteError();
        $location.path("/usuarios");
    }

    function successGetStudent(response) {
        $scope.deleteError();
        $scope.user = response.data;
        self.setEditMode(false);
    }

    self.requestError = function (error) {
        $scope.error = "Há campos obrigatórios não preenchidos e/ou inválidos.";
    }

    if ($stateParams.idUser) {
        if ($scope.currentUser.role == $scope.userRoles.coach) {
            StudentsApiService.getById($stateParams.idUser).then(successGetStudent);
        } else {
            // $scope.user = CoachApiService.getById($stateParams.idUser);
        }
    }

    self.setEditMode = function (editMode) {
        $scope.editMode = editMode;
    }

    self.addUser = function (user) {
        StudentsApiService.addStudent(user).then(successAddStudent(), self.requestError);
    }
});