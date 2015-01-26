function bookConfig($routeProvider) {
  $routeProvider
    .when('/books', {
      templateUrl: 'js/books/book-list.html',
      controller: 'BookListCtrl',
      resolve: {
        books: function(Book) {
          return Book.query();
        }
      }
    })
    .when('/books/:id', {
      templateUrl: 'js/books/book-detail.html',
      controller: 'BookDetailCtrl',
      resolve: {
        book: function($route, Book) {
          return Book.get({ id: $route.current.params.id });
        }
      }
    })
}

angular.module('app').config(bookConfig);
