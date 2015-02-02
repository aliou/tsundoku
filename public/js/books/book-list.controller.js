var app = angular.module('app');

function BookListController($scope, $route, books) {
  $scope.books       = [];

  $scope.currentPage = $route.current.params.page || 1;
  $scope.byRow       = 6;
  $scope.perPage     = 18;
  $scope.totalItems  = 82;


  while (books.length > 0) {
    $scope.books.push(books.splice(0, $scope.byRow));
  }
}

app.controller('BookListCtrl', BookListController);
