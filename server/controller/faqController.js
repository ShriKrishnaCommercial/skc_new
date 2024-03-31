const FaqModel = require('./../../models/faqModel.js');

/**
 * faqController.js
 *
 * @description :: Server-side logic for managing faqs.
 */
module.exports = {

    /**
     * faqController.list()
     */
    list: async function (req, res) {
        const all = await FaqModel.find({})
        return res.json(all);

    },

    /**
     * faqController.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const faq = await FaqModel.find({ product_id: id }).exec()
        if (faq != null) {
            return res.json(faq);
        } else {
            return res.json({ "message": "not found !" });
        }

  
    },

    /**
     * faqController.create()
     */
    create: async function (req, res) {
        const faq = new FaqModel({
			product_id : req.body.product_id,
			question : req.body.question,
			answer : req.body.answer});
            try {
                await FaqModel.create(faq);
        return res.status(201).json(faq)
            } catch (e) {
            return res.status(400).json({ "message": "Error" + e })

        }

},

/**
 * faqController.update()
 */
update: async function (req, res) {
    const id = req.params.id;
    const faq = await FaqModel.findOne({ _id: id }).exec()
    if (faq != null) {
        // update
        faq.product_id = req.body.product_id ? req.body.product_id : faq.product_id;
			faq.question = req.body.question ? req.body.question : faq.question;
			faq.answer = req.body.answer ? req.body.answer : faq.answer;
			
        await FaqModel.updateOne({_id: id },faq).exec()
        return res.json(faq);
    } else {
        // create
        return res.status(400).json({ "message": "Error" })
       
    }
},

/**
 * faqController.remove()
 */
remove: async function (req, res) {
    const id = req.params.id;
   await FaqModel.findByIdAndDelete(id).exec();
        return res.status(204).json();

}
};