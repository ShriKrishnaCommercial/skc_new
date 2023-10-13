const BrandsModel = require('./../../models/brandsModel');

/**
 * brandsController.js
 *
 * @description :: Server-side logic for managing brandss.
 */
module.exports = {

    /**
     * brandsController.list()
     */
    list: async function (req, res) {
        const all = await BrandsModel.find({})

        return res.json(all);

    },

    /**
     * brandsController.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const brands = await BrandsModel.findOne({_id: id}).exec()
        if (brands != null) {
            return res.json(brands);
        } else {
            return res.json({"message": "not found !"});
        }


    },

    /**
     * brandsController.create()
     */
    create: async function (req, res) {
        const brands = new BrandsModel({
            headline: req.body.headline,
            brands: req.body.brands
        });
        try {
            await BrandsModel.create(brands);
            return res.status(201).json(brands)
        } catch (e) {
            return res.status(400).json({"message": "Error" + e})

        }

    },

    /**
     * brandsController.update()
     */
    update: async function (req, res) {
        const id = req.params.id;
        const brands = await BrandsModel.findOne({_id: id}).exec()
        if (brands != null) {
            // update
            brands.headline = req.body.headline ? req.body.headline : brands.headline;
            brands.brands = req.body.brands ? req.body.brands : brands.brands;

            await BrandsModel.updateOne({_id: id}, brands).exec()
            return res.json(brands);
        } else {
            // create
            return res.status(400).json({"message": "Error"})

        }
    },

    /**
     * brandsController.remove()
     */
    remove: async function (req, res) {
        const id = req.params.id;
        await BrandsModel.findByIdAndDelete(id).exec();
        return res.status(204).json();

    }
};