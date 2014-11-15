var app = angular.module('app', ['ngRoute']);

function HeaderController($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return (viewLocation === $location.path());
  };
}

app.controller('HeaderCtrl', HeaderController);

function TsundokuRouting($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'js/home/home.html'
  });
}

app.config(TsundokuRouting);
