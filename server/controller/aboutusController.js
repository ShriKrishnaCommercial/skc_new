const AboutusModel = require('./../../models/aboutusModel');

/**
 * aboutusController.js
 *
 * @description :: Server-side logic for managing aboutuss.
 */
module.exports = {

    /**
     * aboutusController.list()
     */
    list: async function (req, res) {
        const all = await AboutusModel.find({})

        return res.json(all);

    },

    /**
     * aboutusController.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const aboutus = await AboutusModel.findOne({_id: id}).exec()
        if (aboutus != null) {
            return res.json(aboutus);
        } else {
            return res.json({"message": "not found !"});
        }


    },

    /**
     * aboutusController.create()
     */
    create: async function (req, res) {
        const aboutus = new AboutusModel({
            aboutus: req.body.aboutus,
            know_who_we: req.body.know_who_we,
            state: req.body.state,
            clients: req.body.clients,
            values: req.body.values
        });
        try {
            await AboutusModel.create(aboutus);
            return res.status(201).json(aboutus)
        } catch (e) {
            return res.status(400).json({"message": "Error" + e})

        }

    },

    /**
     * aboutusController.update()
     */
    update: async function (req, res) {
        const all = await AboutusModel.find({})
        const aboutus = await AboutusModel.findOne({_id: all[0]._id}).exec()
        if (aboutus != null) {
            // update
            aboutus.aboutus = req.body.aboutus ? req.body.aboutus : aboutus.aboutus;
            aboutus.know_who_we = req.body.know_who_we ? req.body.know_who_we : aboutus.know_who_we;
            aboutus.state = req.body.state ? req.body.state : aboutus.state;
            aboutus.clients = req.body.clients ? req.body.clients : aboutus.clients;
            aboutus.values = req.body.values ? req.body.values : aboutus.values;
            await AboutusModel.updateOne({_id: all[0]._id}, aboutus).exec()
            return res.json(aboutus);
        } else {
            // create
            return res.status(400).json({"message": "Error"})

        }
    },

    /**
     * aboutusController.remove()
     */
    remove: async function (req, res) {
        const id = req.params.id;
        await AboutusModel.findByIdAndDelete(id).exec();
        return res.status(204).json();

    }
};