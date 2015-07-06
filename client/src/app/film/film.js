angular.module( 'ngBoilerplate.film', [
  'ui.router',
  'plusOne'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'film', {
    url: '/film',
    views: {
      "main": {
        controller: 'FilmCtrl',
        templateUrl: 'film/film.tpl.html'
      }
    },
    data:{ pageTitle: 'Películas' }
  });
})

.factory('Films', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/films', {}, {query: {method: 'GET', isArray:true}});
}])

.controller( 'FilmCtrl', function FilmCtrl( $scope, Films) {

  $scope.save = function() {
    var film = {};
    if($scope.film!==undefined){
        film=$scope.film;
        Films.save(film);
    }
  };

})

;

/*
    $scope.saveUser = function() {
        var user = new Users($scope.user);
        $scope.btnText = ' Guardando....';

        var birthdayDate = new Date(user.birthdayDate);
            user.birthdayDate = birthdayDate.getTime() / 1000;
            
        user.$save(user,
            function(responseData) {
                $scope.status = 'SUCCESS';
                $scope.btnText = 'Guardar Mis Datos';
                screen.moveToTop();
            },
            function(error) {
                $scope.status = 'ERROR';
                $scope.error = error;
                $scope.btnText = 'Guardar Mis Datos';
            });
    };
*/