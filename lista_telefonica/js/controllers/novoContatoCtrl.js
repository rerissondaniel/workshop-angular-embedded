angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $sce, $location, contatosApi,  serialGenerator, operadoras) {
    $scope.operadoras = operadoras.data;

    var erroRequisicao = function(response){
        $scope.erroRequisicao = $sce.trustAsHtml(response.data);
    }

    $scope.adicionarContato = function adicionarContato(contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosApi.saveContato(contato).then(function(response){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });
    };
});