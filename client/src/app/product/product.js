angular.module( 'ngBoilerplate.product', [
  'ui.router',
  'plusOne'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'product', {
    url: '/product',
    views: {
      "main": {
        controller: 'ProductCtrl',
        templateUrl: 'product/product.tpl.html'
      }
    },
    data:{ pageTitle: 'Productos' }
  });
})

.factory('Products', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/products', {}, {query: {method: 'GET', isArray:true}});
}])

.controller( 'ProductCtrl', function ProductController( $scope ) {
})

;
