function initialConfig($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'js/home/home.html',
    controller: 'HomeCtrl',
    resolve: {
      popularBooks: function(Book) {
        return Book.popular();
      },
      popularLists: function(BookList) {
        return BookList.popular();
      },
      popularComments: function($http) {
        return $http.get('/api/comments/popular').$promise;
      }
    }
  });

  // $routeProvider.otherwise({
  //   redirectTo: '/'
  // });
}

angular.module('app').config(initialConfig);
