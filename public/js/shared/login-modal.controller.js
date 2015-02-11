var app = angular.module('app');

function loginModalController($scope, $modalInstance, $http) {
  $scope.registering = false;

  $scope.username = '';
  $scope.password = '';
  $scope.email    = '';

  $scope.submit = function() {
    $http.post('/api/users/login', { username: $scope.username, password: $scope.password })
    .success(function(data, status, headers, config) {
    }).error(function(data, status, headers, config) {
    });

    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.register = function() {
    $http.post('/api/users/signup', { username: $scope.username, password: $scope.password, email: $scope.email })
    .success(function(data, status, headers, config) {
    }).error(function(data, status, headers, config) {
    });
    $modalInstance.close();
  };
}

app.controller('loginModalCtrl', loginModalController);
