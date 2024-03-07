var express = require('express');
var router = express.Router();
const dashboardController = require('./../controller/dashboardController');

// get all counts
router.get('/counts', dashboardController.getAllCounts);

// get all cvs
router.get('/cvs/list', dashboardController.getAllCvs);

module.exports = router;