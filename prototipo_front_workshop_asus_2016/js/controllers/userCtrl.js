angular.module("cadastroCapacitacao").controller("UserCtrl", function ($scope, $routeParams, UsuariosApi) {
    var self = this;
    if (null != $routeParams.idUser) {
        self.user = UsuariosApi.getById($routeParams.idUser);
    }

    self.setEditMode = function (editMode) {
        self.editMode = modoEdicao;
    }

    self.addUser = function (user) {

    }
});