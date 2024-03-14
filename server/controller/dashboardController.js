const products = require('./../../models/productsModel');
const subProducts = require('./../../models/subproductModel');
const brands = require('./../../models/brandsModel');
const cvModel = require('./../../models/cvModel');


module.exports = {

    

    getAllCounts : async (req, res) =>{

        const countList = {
            'products' : await products.count(),
            'productsCategory' : await subProducts.count(),
            'brands' : await brands.count(),
            'cvs' : await cvModel.count()
        }

        return res.json({'allCounts' :  countList});

    },

    getAllCvs : async(req, res) =>{
        const allCvs = await cvModel.find({});
        return res.json({'cvs' : allCvs});
    }


}