var app = angular.module('app');

function HeaderController($scope, $location, $modal, Session) {
  $scope.$watch(function() {
    return Session.hasSession();
  }, function(value) {
    $scope.authenticated = value;
  });

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
