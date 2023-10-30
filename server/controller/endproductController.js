const EndproductModel = require('./../../models/endproductModel.js');

/**
 * endproductController.js
 *
 * @description :: Server-side logic for managing endproducts.
 */
module.exports = {

    /**
     * endproductController.list()
     */
    list: async function (req, res) {
        const all = await EndproductModel.find({})

        return res.json(all);

    },

    /**
     * endproductController.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const endproduct = await EndproductModel.find({category: id}).exec()
        if (endproduct != null) {
            return res.json(endproduct);
        } else {
            return res.json({"message": "not found !"});
        }


    },

    /**
     * endproductController.create()
     */
    create: async function (req, res) {
        const endproduct = new EndproductModel({
            name: req.body.name,
            image: req.body.image,
            info: req.body.info,
            partner: req.body.partner,
            category: req.body.category,
            Highlights: req.body.Highlights
        });
        try {
            await EndproductModel.create(endproduct);
            return res.status(201).json(endproduct)
        } catch (e) {
            return res.status(400).json({"message": "Error" + e})

        }

    },

    /**
     * endproductController.update()
     */
    update: async function (req, res) {
        const id = req.params.id;
        const endproduct = await EndproductModel.findOne({_id: id}).exec()
        if (endproduct != null) {
            // update
            endproduct.name = req.body.name ? req.body.name : endproduct.name;
            endproduct.image = req.body.image ? req.body.image : endproduct.image;
            endproduct.info = req.body.info ? req.body.info : endproduct.info;
            endproduct.category = req.body.category ? req.body.category : endproduct.category;
            endproduct.partner = req.body.partner ? req.body.partner : endproduct.partner;
            endproduct.Highlights = req.body.Highlights ? req.body.Highlights : endproduct.Highlights;

            await EndproductModel.updateOne({_id: id}, endproduct).exec()
            return res.json(endproduct);
        } else {
            // create
            return res.status(400).json({"message": "Error"})

        }
    },

    /**
     * endproductController.remove()
     */
    remove: async function (req, res) {
        const id = req.params.id;
        await EndproductModel.findByIdAndDelete(id).exec();
        return res.status(204).json();

    }
};