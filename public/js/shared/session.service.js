function SessionFactory() {
  var key = 'tsundoku_session';
  var Session = {
    data: null,
    saveSession: function(userToken) {
      Session.data = userToken;
      window.localStorage.setItem(key, userToken)
      return Session.data;
    },
    getSession: function() {
      return Session.data;
    },
    destroySession: function() {
      Session.data = null;
      window.localStorage.removeItem(key);
      return Session.data;
    },
    hasSession: function() {
      return Session.data != null;
    },
    loadSession: function() {
      Session.data = window.localStorage.getItem(key);
      return Session.data;
    }
  };

  Session.loadSession();
  return Session;
}

angular.module('app').factory('Session', SessionFactory);
