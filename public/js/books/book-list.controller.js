// Get the app.
var app = angular.module('app');

// Define the controller.
function BookListController($scope, $resource) {
  // Define the route schema for this controller.
  var Book = $resource('/api/books/:id', { id: '@_id' });

  // Make a call to get the models.
  $scope.books = Book.query();
}

// Save the controller in the app.
app.controller('BookListCtrl', BookListController);
