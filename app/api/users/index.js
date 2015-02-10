var express       = require('express');
var controller    = require('./user.controller');

var User          = require('./user.model');

var router = express.Router();

// TODO: Remove the following routes.
router.get('/',          controller.list);

router.get('/:username', controller.show);

module.exports = router
