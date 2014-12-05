var express    = require('express');
var controller = require('./book.controller')

var router = express.Router();

router.get('/',       controller.list);
router.get('/:id',    controller.show);
router.post('/',      controller.create);
router.delete('/:id', controller.destroy);

module.exports = router;
