function initialConfig($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'js/home/home.html'
  });
}

angular.module('app').config(initialConfig);