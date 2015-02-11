function bookListConfig($routeProvider) {
  $routeProvider
    .when('/lists', {
      templateUrl: 'js/booklist/booklist-list.html',
      controller: 'BookListListCtrl',
      resolve: {
        booklists: function($route, BookList) {
          return BookList.query({ page: $route.current.params.page } ).$promise;
        }
      }
    })
    .when('/lists/:id', {
      templateUrl: 'js/booklist/booklist-detail.html',
      controller: 'BookListDetailCtrl',
      resolve: {
        booklist: function($route, BookList) {
          return BookList.get({ id: $route.current.params.id });
        }
      }
    })
}

angular.module('app').config(bookListConfig);
