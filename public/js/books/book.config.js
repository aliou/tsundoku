function bookConfig($routeProvider) {
  $routeProvider
    .when('/books', {
      templateUrl: 'js/books/book-list.html',
      controller: 'BookListCtrl',
      resolve: {
        books: function($route, Book) {
          return Book.query({ page: $route.current.params.page }).$promise;
        }
      }
    })
    .when('/books/:id', {
      templateUrl: 'js/books/book-detail.html',
      controller: 'BookDetailCtrl',
      resolve: {
        book: function($route, Book) {
          return Book.get({ id: $route.current.params.id }).$promise.
            catch(function(error) { return null; });
        }
      }
    })
}

angular.module('app').config(bookConfig);
