var app = angular.module('app');

function BookListListController($scope, $route, booklists) {
  $scope.booklists       = [];
}

app.controller('BookListListCtrl', BookListListController);
