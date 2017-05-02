angular.module("cadastroCapacitacao").service("StudentsApiService", function ($http, AppConfig) {
    this.getStudents = function () {
        return $http.get(AppConfig.baseUrl + "student");
    }

    this.removeStudent = function (student) {
        return $http.delete(AppConfig.baseUrl + "coach/student/" + student.id);
    }

    this.addStudent = function (student) {
        return $http.post(AppConfig.baseUrl + "coach/student", student);
    }
});