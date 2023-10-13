const express = require('express');
const router = express.Router();
const contactusController = require('./../controller/contactusController');

/*
 * GET
 */
router.get('/', contactusController.list);

/*
 * GET
 */
router.get('/:id', contactusController.show);

/*
 * POST
 */
router.post('/', contactusController.create);

/*
 * PUT
 */
router.put('/:id', contactusController.update);

/*
 * DELETE
 */
router.delete('/:id', contactusController.remove);

module.exports = router;
