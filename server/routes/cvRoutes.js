//created on 26/10/23 14:11:13

//created by Yash chowdhari 
//Email :- yashc1999@gmail.com
//skc_new

const express = require('express');
const router = express.Router();
const cvsController = require('./../controller/cvController.js');
const multer = require("multer");
const CvsModel = require("../../models/cvModel");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/cv')
    }, filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
    fileFilter: function(req, file, cb){
        console.log(file.originalname);
    }
})
var upload = multer({storage: storage})
/*
 * GET
 */
router.get('/', cvsController.list);

/*
 * GET
 */
router.get('/:id', cvsController.show);

/*
 * POST
 */
router.post('/', cvsController.create);
router.post('/addcv', upload.single('cv'), async function (req, res, next) {
    const cvs = new CvsModel({
        firs_name: req.body.firs_name,
        last_name: req.body.last_name,
        email: req.body.email,
        country: req.body.country,
        file: req.file.filename,
        Street_address: req.body.Street_address
    });
    try {
        await CvsModel.create(cvs);
        return res.status(201).json(cvs)
    } catch (e) {
        return res.status(400).json({"message": "Error" + e})

    }

    // req.body contains the text fields
})
/*
 * PUT
 */
router.put('/:id', cvsController.update);

/*
 * DELETE
 */
router.delete('/:id', cvsController.remove);

module.exports = router;
