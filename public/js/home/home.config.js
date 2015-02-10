function initialConfig($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'js/home/home.html',
    controller: 'HomeCtrl',
    resolve: {
      popularBooks: function(Book) {
        return Book.popular();
      },
      popularLists: function() {
        // TODO: return BookList.popular();
        return []
      },
    }
  });

  // $routeProvider.otherwise({
  //   redirectTo: '/'
  // });
}

angular.module('app').config(initialConfig);
