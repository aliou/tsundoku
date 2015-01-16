function initialConfig($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'js/home/home.html',
    controller: 'HomeCtrl'
  });

  // $routeProvider.otherwise({
  //   redirectTo: '/'
  // });
}

angular.module('app').config(initialConfig);
