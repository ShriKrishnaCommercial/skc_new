var express = require('express');
var router = express.Router();
var brandsController = require('./../controller/brandsController');

/*
 * GET
 */
router.get('/', brandsController.list);

/*
 * GET
 */
router.get('/:id', brandsController.show);

/*
 * POST
 */
router.post('/', brandsController.create);

/*
 * PUT
 */
router.put('/:id', brandsController.update);

/*
 * DELETE
 */
router.delete('/:id', brandsController.remove);

module.exports = router;
