angular.module("cadastroCapacitacao").service("AuthService", function ($http, AppConfig, SessionService) {

    var self = this;

    function createSession(response) {
        SessionService.createSession(response.data);
        return response;
    }

    self.getToken = function () {
        return SessionService.id;
    }

    self.logout = function () {
        SessionService.destroy();
    }

    self.login = function (credentials) {
        return $http.post(AppConfig.baseUrl + "auth", credentials).then(createSession);
    }

    self.isAuthenticated = function () {
        return !!SessionService.id;
    }

    self.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles]
        }
        return self.isAuthenticated() && authorizedRoles.indexOf(SessionService.user.role) != -1;
    }

});