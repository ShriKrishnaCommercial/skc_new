//created on 26/10/23 14:09:54

//created by Yash chowdhari 
//Email :- yashc1999@gmail.com
//skc_new


const CvsModel = require('./../../models/cvModel.js');

/**
 * cvsController.js
 *
 * @description :: Server-side logic for managing cvss.
 */
module.exports = {

    /**
     * cvsController.list()
     */
    list: async function (req, res) {
        const all = await CvsModel.find({})

        return res.json(all);

    },

    /**
     * cvsController.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const cvs = await CvsModel.findOne({_id: id}).exec()
        if (cvs != null) {
            return res.json(cvs);
        } else {
            return res.json({"message": "not found !"});
        }


    },

    /**
     * cvsController.create()
     */
    create: async function (req, res) {
        const cvs = new CvsModel({
            firs_name: req.body.firs_name,
            last_name: req.body.last_name,
            email: req.body.email,
            country: req.body.country,
            file: req.body.file,
            Street_address: req.body.Street_address
        });
        try {
            await CvsModel.create(cvs);
            return res.status(201).json(cvs)
        } catch (e) {
            return res.status(400).json({"message": "Error" + e})

        }

    },

    /**
     * cvsController.update()
     */
    update: async function (req, res) {
        const id = req.params.id;
        const cvs = await CvsModel.findOne({_id: id}).exec()
        if (cvs != null) {
            // update
            cvs.firs_name = req.body.firs_name ? req.body.firs_name : cvs.firs_name;
            cvs.last_name = req.body.last_name ? req.body.last_name : cvs.last_name;
            cvs.email = req.body.email ? req.body.email : cvs.email;
            cvs.country = req.body.country ? req.body.country : cvs.country;
            cvs.file = req.body.file ? req.body.file : cvs.file;
            cvs.Street_address = req.body.Street_address ? req.body.Street_address : cvs.Street_address;

            await CvsModel.updateOne({_id: id}, cvs).exec()
            return res.json(cvs);
        } else {
            // create
            return res.status(400).json({"message": "Error"})

        }
    },

    /**
     * cvsController.remove()
     */
    remove: async function (req, res) {
        const id = req.params.id;
        await CvsModel.findByIdAndDelete(id).exec();
        return res.status(204).json();

    }
};