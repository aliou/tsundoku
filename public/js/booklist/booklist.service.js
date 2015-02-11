// Define the factory.
function BookListFactory($resource) {
  // Define the route schema for this controller.
  return $resource('/api/lists/:id', { id: '@_id' }, {
    popular: { params: { id: 'popular' }, method: 'GET', isArray: true }
  });
}

// Save the factory in the app.
angular.module('app').factory('BookList', BookListFactory);
