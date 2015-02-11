var app = angular.module('app');

function loginModalController($scope, $modalInstance, $http) {
  $scope.username = '';
  $scope.password = '';

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
}

app.controller('loginModalCtrl', loginModalController);
