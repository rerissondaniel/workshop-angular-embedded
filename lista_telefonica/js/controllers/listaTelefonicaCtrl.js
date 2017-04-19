angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $sce, contatosApi, operadorasApi, serialGenerator) {

    //Tudo que desejamos acessar na view deve ser definido em scope...

    //...Isso inclui variáveis...

    console.log(serialGenerator.generate());

    $scope.app = "Lista Telefonica";
    $scope.operadoras = [];
    $scope.contatos = [];

    //...E funções.

    var erroRequisicao = function(response){
        $scope.erroRequisicao = $sce.trustAsHtml(response.data);
    }

    var carregarContatos = function(){
        contatosApi.getContatos().then(
            function(response){
                $scope.contatos = response.data;
            }, erroRequisicao);
    };

    var carregarOperadoras = function(){
            operadorasApi.getOperadoras().then(function(response){
                $scope.operadoras = response.data;
            }, erroRequisicao);
    }

    $scope.isContatoSelecionado = function isContatoSelecionado(contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.adicionarContato = function adicionarContato(contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        $scope.contatos.push(angular.copy(contato));
            contatosApi.saveContato(contato).then(function(response){
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

        contatos.forEach(function(contato){
            if(contato.selecionado){
                contatosApi.apagarContato(contato).then(function(response){}, erroRequisicao);
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