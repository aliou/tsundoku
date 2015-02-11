function BookDetailController($scope, book, Book, Session) {
  $scope.book = book;

  $scope.comment = ''
  $scope.saveComment = function() {
    Book.addComment({
      id:      book._id,
      comment: $scope.comment,
      user:    Session.getSession()
    });
  };
}

angular.module('app').controller('BookDetailCtrl', BookDetailController);
