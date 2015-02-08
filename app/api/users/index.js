var express       = require('express');
var controller    = require('./user.controller');

var User          = require('./user.model');

var router = express.Router();

// No need to be auth'ed.
router.post('/',       controller.create);
router.get('/:id',     controller.show);

// Auth'ed routes.
router.post('/login',  controller.login);
router.post('/logout', controller.logout);

module.exports = router
