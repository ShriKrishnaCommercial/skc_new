const SubproductModel = require('./../../models/subproductModel.js');

/**
 * subproductController.js
 *
 * @description :: Server-side logic for managing subproducts.
 */
module.exports = {

    /**
     * subproductController.list()
     */
    list: async function (req, res) {
        const all = await SubproductModel.find({})

        return res.json(all);

    },

    /**
     * subproductController.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const subproduct = await SubproductModel.find({category: id})
        if (subproduct != null) {
            return res.json(subproduct);
        } else {
            return res.json({"message": "not found !"});
        }


    },

    /**
     * subproductController.create()
     */
    create: async function (req, res) {
        const subproduct = new SubproductModel({
            name: req.body.name,
            image: req.body.image
        });
        try {
            await SubproductModel.create(subproduct);
            return res.status(201).json(subproduct)
        } catch (e) {
            return res.status(400).json({"message": "Error" + e})

        }

    },

    /**
     * subproductController.update()
     */
    update: async function (req, res) {
        const id = req.params.id;
        const subproduct = await SubproductModel.findOne({_id: id}).exec()
        if (subproduct != null) {
            // update
            subproduct.name = req.body.name ? req.body.name : subproduct.name;
            subproduct.image = req.body.image ? req.body.image : subproduct.image;

            await SubproductModel.updateOne({_id: id}, subproduct).exec()
            return res.json(subproduct);
        } else {
            // create
            return res.status(400).json({"message": "Error"})

        }
    },

    /**
     * subproductController.remove()
     */
    remove: async function (req, res) {
        const id = req.params.id;
        await SubproductModel.findByIdAndDelete(id).exec();
        return res.status(204).json();

    }
};