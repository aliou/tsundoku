function HomeController($scope, popularBooks) {
  $scope.popularBooks = popularBooks;
}

angular.module('app').controller('HomeCtrl', HomeController);
