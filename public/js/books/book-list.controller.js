// Get the app.
var app = angular.module('app');

// Define the controller.
function BookListController($scope, books) {
  // Store in scope the books we get from the book service.
  var byRow = 6;
  $scope.books = [];
  while(books.length > 0) {
    $scope.books.push(books.splice(0, byRow));
  }
  console.log($scope.books);
}

// Save the controller in the app.
app.controller('BookListCtrl', BookListController);
