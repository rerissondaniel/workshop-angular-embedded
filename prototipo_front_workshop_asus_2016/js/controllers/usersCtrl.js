angular.module("cadastroCapacitacao").controller("UsersCtrl", function ($scope, StudentsApiService) {
    var self = this;

    self.getAge = function () {
        return "";
    }

    function successGetUsers(response) {
        self.users = response.data;
        console.log(self.users);
    }

    function sucessRemoveStudent(response) {
        var idx = self.users.indexOf(self.tempStudent);
        self.users.splice(idx, 1);
        delete self.tempStudent;
    }

    StudentsApiService.getStudents().then(successGetUsers, $scope.requestError);

    self.removeStudent = function (student) {
        self.tempStudent = student;
        StudentsApiService.removeStudent(student).then(sucessRemoveStudent, $scope.requestError);
    }
});