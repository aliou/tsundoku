function HomeController($scope, popularBooks) {
  $scope.popularBooks   = popularBooks;
  $scope.popularLists   = [];
  $scope.popularReviews = [];
}

angular.module('app').controller('HomeCtrl', HomeController);
