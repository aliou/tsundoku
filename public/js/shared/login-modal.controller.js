var app = angular.module('app');

function loginModalController($scope, $modalInstance, $http, Session) {
  $scope.registering = false;
  $scope.error       = null;

  $scope.username = '';
  $scope.password = '';
  $scope.email    = '';

  $scope.login = function() {
    $http.post('/api/users/login', { username: $scope.username, password: $scope.password })
    .success(function(data, status, headers, config) {
      Session.saveSession(data._id);
      $modalInstance.close();
    }).error(function(data, status, headers, config) {
      $scope.error = { message: 'An error occured. Please try again.' };
    });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.register = function() {
    $http.post('/api/users/signup', {
      username: $scope.username, password: $scope.password, email: $scope.email
    }).success(function(data, status, headers, config) {
      Session.saveSession(data._id);
      $modalInstance.close();
    }).error(function(data, status, headers, config) {
      $scope.error = { message: 'An error occured. Please try again.' };
    });
    $modalInstance.close();
  };
}

app.controller('loginModalCtrl', loginModalController);
