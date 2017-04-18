angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http, contatosApi) {

    //Tudo que desejamos acessar na view deve ser definido em scope...

    //...Isso inclui variáveis...

    $scope.app = "Lista Telefonica";
    $scope.operadoras = [];
    $scope.contatos = [];

    //...E funções.

    var carregarContatos = function(){
        contatosApi.getContatos().then(function(response){
                $scope.contatos = response.data;
        });
    };

    var carregarOperadoras = function(){
            $http.get("http://localhost:3412/operadoras").then(function(response){
                $scope.operadoras = response.data;
            }, function(response){
                alert("Não foi possível encontrar o serviço de operadoras");
            });
    }

    $scope.isContatoSelecionado = function isContatoSelecionado(contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.adicionarContato = function adicionarContato(contato) {
        $scope.contatos.push(angular.copy(contato));
            $http.post("http://localhost:3412/contatos", contato).then(function(response){
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
            });
    };

    $scope.apagarContatos = function apagarContatos(contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) {
                return contato;
            }
        });
    }

    $scope.direcaoDeOrdenacao = true;

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDeOrdenacao = !$scope.direcaoDeOrdenacao;
    }

    carregarContatos();
    carregarOperadoras();
});