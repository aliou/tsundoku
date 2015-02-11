function BookListListDetailController($scope, booklist) {
  $scope.booklist = booklist;
}

angular.module('app').controller('BookListListDetailCtrl', BookListListDetailController);
