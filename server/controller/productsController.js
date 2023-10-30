const ProductsModel = require('./../../models/productsModel.js');

/**
 * productsController.js
 *
 * @description :: Server-side logic for managing productss.
 */
module.exports = {

    /**
     * productsController.list()
     */
    list: async function (req, res) {
        const all = await ProductsModel.find({})

        return res.json(all);

    },

    /**
     * productsController.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const products = await ProductsModel.findOne({_id: id}).exec()
        if (products != null) {
            return res.json(products);
        } else {
            return res.json({"message": "not found !"});
        }


    },

    /**
     * productsController.create()
     */
    create: async function (req, res) {
        const products = new ProductsModel({
            name: req.body.name
        });
        try {
            await ProductsModel.create(products);
            return res.status(201).json(products)
        } catch (e) {
            return res.status(400).json({"message": "Error" + e})

        }

    },

    /**
     * productsController.update()
     */
    update: async function (req, res) {
        const id = req.params.id;
        const products = await ProductsModel.findOne({_id: id}).exec()
        if (products != null) {
            // update
            products.name = req.body.name ? req.body.name : products.name;

            await ProductsModel.updateOne({_id: id}, products).exec()
            return res.json(products);
        } else {
            // create
            return res.status(400).json({"message": "Error"})

        }
    },

    /**
     * productsController.remove()
     */
    remove: async function (req, res) {
        const id = req.params.id;
        await ProductsModel.findByIdAndDelete(id).exec();
        return res.status(204).json();

    }
};