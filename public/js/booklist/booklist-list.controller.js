var app = angular.module('app');

function BookListListController($scope, $route, lists) {
  $scope.lists = lists;
}

app.controller('BookListListCtrl', BookListListController);
