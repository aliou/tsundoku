function HomeController($scope, popularBooks, popularLists) {
  $scope.popularBooks   = popularBooks;
  $scope.popularLists   = popularLists;
  $scope.popularReviews = [];
}

angular.module('app').controller('HomeCtrl', HomeController);
