angular.module( 'ngBoilerplate.list', [
  'ui.router',
  'plusOne',
  'ngBoilerplate.game',
  'ngBoilerplate.film',
  'ngBoilerplate.product'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'list', {
    url: '/list',
    views: {
      "main": {
        controller: 'ListCrtl',
        templateUrl: 'list/list.tpl.html'
      },
      "search":{
        controller: 'ListCrtl',
        templateUrl: 'index.html'
      }
    },
    data:{ pageTitle: 'Listado' }
  });
})

//http://localhost:3000/api/games?name__regex=parte del texto a buscar

.controller( 'ListCrtl', function ListCrtl( $scope, Films, Games, Products) {

  $scope.search = function() {

    var textToSearch = {name__regex : $scope.searchText};
    var codeToSearch = {code__regex : $scope.searchText};

    var films = Films.query(textToSearch,function(response){
      $scope.films = response;
    });

    if (!($scope.searchText.NaN)){
      var filmsByCode = Films.query(codeToSearch,function(response){
        $scope.filmsByCode = response;
      });
    }

    var games = Games.query(textToSearch,function(response){
      $scope.games = response;
    });

    if (!($scope.searchText.NaN)){
      var gamesByCode = Games.query(codeToSearch,function(response){
        $scope.gamesByCode = response;
      });
    }
    
//    var products = Products.query(textToSearch,function(response){
//      $scope.products = response;
//    });

  };

})

;
