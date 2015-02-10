var app = angular.module('app');

function HeaderController($scope, $location, $modal) {
  $scope.isActive = function(viewLocation) {
    return (viewLocation === $location.path());
  };

  $scope.loginModal = function() {
    var modalInstance = $modal.open({
      templateUrl: 'js/shared/loginModal.html',
      controller: 'loginModalCtrl'
    });
  };
}

app.controller('loginModalCtrl', function($scope, $modalInstance) {
  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});

app.controller('HeaderCtrl', HeaderController);
