function HomeController($scope, popularBooks, popularLists, popularComments) {
  $scope.popularBooks   = popularBooks;
  $scope.popularLists   = popularLists;
  $scope.popularReviews = popularComments;
}

angular.module('app').controller('HomeCtrl', HomeController);
