// Define the factory.
function BookFactory($resource) {
  // Define the route schema for this controller.
  return $resource('/api/books/:id', { id: '@_id' }, {
    popular:    { params: { id: 'popular' }, method: 'GET', isArray: true },
    addComment: { params: { id: '@id', content: '@comment', user: '@user' },
      method: 'POST', url: '/api/books/:id/addComment', isArray: true }
  });
}

// Save the factory in the app.
angular.module('app').factory('Book', BookFactory);
