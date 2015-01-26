function BookDetailController($scope, book) {
  $scope.book = book;
}

angular.module('app').controller('BookDetailCtrl', BookDetailController);
