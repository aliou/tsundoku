var app = angular.module('app');

function HeaderController($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return (viewLocation === $location.path());
  };
}

app.controller('HeaderCtrl', HeaderController);
