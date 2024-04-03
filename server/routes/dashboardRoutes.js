var express = require('express');
var router = express.Router();
const dashboardController = require('./../controller/dashboardController');
const quotesController = require("../controller/quotesController");
const leaderController = require("../controller/leaderController");

// get all counts
router.get('/counts', dashboardController.getAllCounts);

// get all cvs
router.get('/cvs/list', dashboardController.getAllCvs);

// get all quotes
router.get('/quotes/all', quotesController.allQuotes);
// update leaders
router.put("/leader/:id", leaderController.update);

module.exports = router;