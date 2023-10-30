var express = require('express');
var router = express.Router();
var brandsController = require('./../controller/brandsController');
const multer = require('multer')
const {extname} = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/brand')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
var upload = multer({storage: storage})
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

router.post('/addimage', upload.single('brand'), function (req, res, next) {
    res.json({
        "message":req.file.filename
    })
    // req.body contains the text fields
})
/*
 * DELETE
 */
router.delete('/:id', brandsController.remove);

module.exports = router;
