var express = require('express');
var router = express.Router();
const quotesController = require('../controller/quotesController');

// post a quote
router.post('/new', quotesController.newQuote);

module.exports = router;