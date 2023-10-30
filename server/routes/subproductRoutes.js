const express = require('express');
const router = express.Router();
const subproductController = require('./../controller/subproductController');

const subproductSchema = require("../../models/subproductModel");
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/subproduct')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
var upload = multer({storage: storage})
/*
 * GET
 */
router.get('/', subproductController.list);

/*
 * GET
 */
router.get('/:id', subproductController.show);

/*
 * POST
 */
// router.post('/', subproductController.create);
router.post('/subproduct', upload.single('subproduct'), async function (req, res, next) {
    const cvs = new subproductSchema({
        name: req.body.name,
        category: req.body.category,
        file: req.file.filename,
    });
    try {
        await subproductSchema.create(cvs);
        return res.status(201).json(cvs)
    } catch (e) {
        return res.status(400).json({"message": "Error" + e})

    }

    // req.body contains the text fields
})
/*
 * PUT
 */
router.put('/:id', subproductController.update);

/*
 * DELETE
 */
router.delete('/:id', subproductController.remove);

module.exports = router;
