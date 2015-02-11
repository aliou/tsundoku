var app = angular.module('app');

function HeaderController($scope, $location, $modal) {
  $scope.authenticated = false;

  $scope.isActive = function(viewLocation) {
    return (viewLocation === $location.path());
  };

  $scope.loginModal = function() {
    var modalInstance = $modal.open({
      templateUrl: 'js/shared/loginModal.html',
      controller: 'loginModalCtrl'
    });
  };

  $scope.logoutModal = function() {
    var modalInstance = $modal.open({
      templateUrl: 'js/shared/logoutModal.html',
      controller: 'logoutModalCtrl'
    });
  };
}

app.controller('HeaderCtrl', HeaderController);
