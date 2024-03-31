const QuotesModel = require('../../models/quotesModel');

module.exports = {
    allQuotes: async function(req, res){
        const all = await QuotesModel.find({});
        return res.json({
            "error": false,
            "quotes" : all
        });

    },

    newQuote: async function(req, res){
        const quote = new QuotesModel({
            email: req.body.email,
            product: req.body.product
        });
        try {
            const c = await QuotesModel.find({email: req.body.email,
                product: req.body.product}).count();
            if(c > 0){
                return res.json({
                    "error" : true,
                    "message" : "Duplicate Entry"
                })
            }
            await QuotesModel.create(quote);
            return res.status(201).json(quote)
        } catch (e) {
            return res.status(400).json({"message": "Error" + e})

        }
    }
}