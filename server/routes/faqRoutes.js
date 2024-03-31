const express = require('express');
const router = express.Router();
const faqController = require('./../controller/faqController');

/*
 * GET
 */
router.get('/', faqController.list);

/*
 * GET
 */
router.get('/single/:id', faqController.show);

/*
 * POST
 */
router.post('/', faqController.create);

/*
 * PUT
 */
router.put('/:id', faqController.update);

/*
 * DELETE
 */
router.delete('/:id', faqController.remove);

module.exports = router;
