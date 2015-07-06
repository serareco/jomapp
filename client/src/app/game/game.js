angular.module( 'ngBoilerplate.game', [
  'ui.router',
  'plusOne'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'game', {
    url: '/game',
    views: {
      "main": {
        controller: 'GameCtrl',
        templateUrl: 'game/game.tpl.html'
      }
    },
    data:{ pageTitle: 'Juegos' }
  });
})

.factory('Games', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/games', {}, {query: {method: 'GET', isArray:true}});
}])

.controller( 'GameCtrl', function GameCtrl( $scope, Games ) {
  $scope.show = false;
  $scope.buttonText = "Nuevo Juego";

  $scope.save = function() {
    var game = {};
    $scope.buttonText = "Guardando...";
    
    if($scope.game!==undefined){
        Games.save($scope.game);
        $scope.buttonText = "Nuevo Juego";
        $scope.game = game;
        $scope.show = true;

    }
  };

})

;
