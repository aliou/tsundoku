var app = angular.module('app');

function logoutModalController($scope, $modalInstance, $http, Session) {
  $scope.error = null;
  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.logout = function() {
    $http.get('/api/users/logout')
    .success(function() {
      Session.destroySession();
      $modalInstance.close();
    }).error(function() {
      $scope.error = { message: 'An error occured. Please try again.' };
    });
  };
};

app.controller('logoutModalCtrl', logoutModalController);
