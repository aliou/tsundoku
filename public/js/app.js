var app = angular.module('app', ['ngRoute', 'ngResource']);

function TsundokuRouting($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'js/home/home.html'
  })
  .when('/books', {
    templateUrl: 'js/books/book-list.html',
    controller: 'BookListCtrl',
    resolve: {
      books: function(Book) {
        return Book.query();
      }
    }
  });
}

app.config(TsundokuRouting);
