angular.module("listaTelefonica").controller("contatosCtrl", function ($scope, $sce, contatosApi, serialGenerator, contatos) {

    //Tudo que desejamos acessar na view deve ser definido em scope...

    //...Isso inclui variáveis...

    $scope.app = "Lista Telefonica";
    $scope.contatos = contatos.data;

    //...E funções.

    $scope.isContatoSelecionado = function isContatoSelecionado(contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
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
});