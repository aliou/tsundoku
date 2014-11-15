var app = angular.module('app', ['ngRoute']);

function TsundokuRouting($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'js/home/home.html'
  });
}

app.config(TsundokuRouting);
