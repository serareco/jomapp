angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne',
  'ngBoilerplate.game',
  'ngBoilerplate.film',
  'ngBoilerplate.product'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope, Films, Games, Products ) {
    var filterWeek = {dateInsert__gt: ""};

    $scope.countFilms = $scope.countGames = $scope.countProducts = 'Cargando...';

    var films = Films.query(function(response){
      $scope.countFilms=response.length;
    });

    var filmsWeek = Films.query(filterWeek,function(response){
      $scope.countFilmsWeek=response.length;
    });

    var games = Games.query(function(response){
      $scope.countGames=response.length;
    });

    var gamesWeek = Games.query(filterWeek,function(response){
      $scope.countGamesWeek=response.length;
    });

    var products = Products.query(function(response){
      $scope.countProducts=response.length;
    });

    var productsWeek = Products.query(filterWeek,function(response){
      $scope.countProductsWeek=response.length;
    });

/**
* TODO:
* Filtrar por fecha de ingreso
*
**/

})

;

