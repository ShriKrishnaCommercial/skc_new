var express = require('express');
var router = express.Router();
var aboutusController = require('./../controller/aboutusController');

/*
 * GET
 */
router.get('/', aboutusController.list);

/*
 * GET
 */
router.get('/:id', aboutusController.show);

/*
 * POST
 */
router.post('/', aboutusController.create);

/*
 * PUT
 */
router.put('/', aboutusController.update);

/*
 * DELETE
 */
router.delete('/:id', aboutusController.remove);

module.exports = router;
