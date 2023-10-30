const express = require('express');
const router = express.Router();
const subproductController = require('./../controller/subproductController');

const subproductSchema = require("../../models/subproductModel");
const multer = require("multer");
const SubproductModel = require("../../models/subproductModel");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/subproduct')
    }, filename: function (req, file, cb) {
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
router.post('/subproduct', upload.single('subproduct'), async function (req, res, next) {
    const cvs = new subproductSchema({
        name: req.body.name, category: req.body.category, image: req.file.filename,
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
// router.put('/:id', subproductController.update);
router.put('/:id', upload.single('subproduct'), async function (req, res, next) {
    const id = req.params.id;
    const subproduct = await SubproductModel.findOne({_id: id}).exec()
    if (subproduct != null) {
        // update
        subproduct.name = req.body.name ? req.body.name : subproduct.name;
        if (req.file != null) {

            subproduct.image = req.file.filename ? req.file.filename : subproduct.image;
        }

        await SubproductModel.updateOne({_id: id}, subproduct).exec()
        return res.json(subproduct);
    } else {
        // create
        return res.status(400).json({"message": "Error"})

    }

    // req.body contains the text fields
})

/*
 * DELETE
 */
router.delete('/:id', subproductController.remove);

module.exports = router;
