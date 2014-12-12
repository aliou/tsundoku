// Get the app.
var app = angular.module('app');

// Define the controller.
function BookListController($scope, books) {
  // Store in scope the books we get from the book service.
  $scope.books = books;
}

// Save the controller in the app.
app.controller('BookListCtrl', BookListController);
