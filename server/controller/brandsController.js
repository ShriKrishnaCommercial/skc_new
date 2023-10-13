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
        // const brands = [
        //     "AMARARAJA.jpg",
        //     "anchor by pana.png",
        //     "APAR.png",
        //     "azbil.jpg",
        //     "Balluff wb.png",
        //     "Baur.png",
        //     "bharat bijlee.jpg",
        //     "Burkert brand.png",
        //     "cesyco.png",
        //     "CGL01.png",
        //     "contrinex WB.png",
        //     "CROMPTO LOGO.png",
        //     "euchner.png",
        //     "Flexim.png",
        //     "general...jpg",
        //     "givi misure.png",
        //     "HALONIXX.jpg",
        //     "HAVELLS IMAGE.jpg",
        //     "heidenian wb.png",
        //     "hitachi.jpg",
        //     "kaycee.png",
        //     "KEI.png",
        //     "krykard wb.jpg",
        //     "leuze wb.png",
        //     "megger wb.png",
        //     "michell_instruments.png",
        //     "MICRO EPSILON.png",
        //     "MOIST TECH LOGO.png",
        //     "nidec.png",
        //     "Nivo control.png",
        //     "olympus - removebg - preview.png",
        //     "OMC Italy.png",
        //     "pepperl fuchs.png",
        //     "POLYCAB1.png",
        //     "pp.png",
        //     "Prok Dvs.png",
        //     "radio detection.png",
        //     "Rishab.png",
        //     "rokade wb.png",
        //     "saft.png",
        //     "SCS.png",
        //     "secure.png",
        //     "simbott.png",
        //     "Spohn burkhardt.png",
        //     "stanley.png",
        //     "thermax wb.png",
        //     "Toshbro Control.png",
        //     "TR electronic.png",
        //     "Uniflow.png",
        //     "YAMUNA DENSON.jpg",
        // ];
        // let i = 0
        // for (const e of brands) {
        //     const brands = new BrandsModel({
        //         headline: i,
        //         brands: e.toString()
        //     });
        //     await BrandsModel.create(brands);
        //     i++;
        // }

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