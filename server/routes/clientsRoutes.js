const express = require('express');
const router = express.Router();
const clientsController = require('./../controller/clientsController.js');
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/client')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
var upload = multer({storage: storage})
/*
 * GET
 */
router.get('/', clientsController.list);

/*
 * GET
 */
router.get('/:id', clientsController.show);

/*
 * POST
 */
router.post('/', clientsController.create);

/*
 * PUT
 */
router.put('/:id', clientsController.update);
router.post('/addimage', upload.single('client'), function (req, res, next) {
    res.json({
        "message":req.file.filename
    })
    // req.body contains the text fields
})
/*
 * DELETE
 */
router.delete('/:id', clientsController.remove);

module.exports = router;
