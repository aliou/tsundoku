var app = angular.module('app', ['ngRoute']);

function TsundokuRouting($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'js/home/home.html'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
}

app.config(TsundokuRouting);
