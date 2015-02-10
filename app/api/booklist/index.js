var express    = require('express');
var controller = require('./booklist.controller')

var router = express.Router();

router.get('/',        controller.list);
router.get('/popular', controller.popular);
router.get('/:id',     controller.show);
router.post('/',       controller.create);
router.delete('/:id',  controller.destroy);

router.get('/:id/popular', controller.togglePopular);

module.exports = router;
