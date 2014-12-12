// Get the app.
var app = angular.module('app');

// Define the factory.
function BookFactory($resource) {
  // Define the route schema for this controller.
  return $resource('/api/books/:id', { id: '@_id' });
}

// Save the factory in the app.
app.factory('Book', BookFactory);
