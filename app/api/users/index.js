var controller = require('./user.controller');
var express    = require('express');
var passport   = require('passport');

require('./config')(passport);

var User = require('./user.model');

var router = express.Router();

// TODO: Remove the following routes.
router.get('/',          controller.list);

router.post('/login',    passport.authenticate('local', { failureFlash: true }),        controller.login);
router.post('/signup',   passport.authenticate('local-signup', { failureFlash: true }), controller.signup);
router.get('/logout',    controller.logout);
router.get('/:username', controller.show);

module.exports = router
