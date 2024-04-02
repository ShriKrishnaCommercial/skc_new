const express = require('express');
const router = express.Router();
const leaderController = require('../controller/leaderController');

router.get("/all", leaderController.list);

module.exports=router