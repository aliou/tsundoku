function HomeController($scope, popularBooks, popularLists, popularComments) {
  $scope.popularBooks   = popularBooks;
  $scope.popularLists   = popularLists;
  $scope.popularComment = popularComments;
}

angular.module('app').controller('HomeCtrl', HomeController);
