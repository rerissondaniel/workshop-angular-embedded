angular.module("listaTelefonica").config(function($routeProvider){
    $routeProvider.when("/contatos/", {
        templateUrl: "view/contatos.html",
        controller : "contatosCtrl",
        resolve : {
            contatos : function(contatosApi){
                return contatosApi.getContatos();
            }
        }
    });

    $routeProvider.when("/novoContato/", {
        templateUrl : "view/novoContato.html",
        controller : "novoContatoCtrl",
        resolve : {
            operadoras : function(operadorasApi){
                return operadorasApi.getOperadoras();
            }
        }
    });

    $routeProvider.otherwise({redirectTo : "/contatos"});
});