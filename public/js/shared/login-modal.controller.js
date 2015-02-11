var app = angular.module('app');

function loginModalController($scope, $modalInstance, $http) {
  $scope.registering = false;
  $scope.error       = null;

  $scope.username = '';
  $scope.password = '';
  $scope.email    = '';

  $scope.login = function() {
    $http.post('/api/users/login', { username: $scope.username, password: $scope.password })
    .success(function(data, status, headers, config) {
      // TODO: Auth on local side.
      $modalInstance.close();
    }).error(function(data, status, headers, config) {
      $scope.error = { message: 'An error occured. Please try again.' };
    });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.register = function() {
    $http.post('/api/users/signup', { username: $scope.username, password: $scope.password, email: $scope.email })
    .success(function(data, status, headers, config) {
      // TODO: Auth on local side.
      $modalInstance.close();
    }).error(function(data, status, headers, config) {
      $scope.error = { message: 'An error occured. Please try again.' };
    });
    $modalInstance.close();
  };
}

app.controller('loginModalCtrl', loginModalController);
