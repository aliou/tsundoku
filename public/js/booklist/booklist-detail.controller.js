function BookListDetailController($scope, list) {
  $scope.list = list;
}

angular.module('app').controller('BookListDetailCtrl', BookListDetailController);
