function BookDetailController($scope, $route, Book) {
  $scope.book = Book.get({ _id: $route.current.params.id });
}

angular.module('app').controller('BookDetailCtrl', BookDetailController);
