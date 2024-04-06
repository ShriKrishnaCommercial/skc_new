const LeaderModel = require('../../models/leaderModel');

module.exports = {
    list: async function (req, res) {
        const all = await LeaderModel.find({})
        return res.json(all);

    },

    update: async function (req, res) {
        const id = req.params.id;
        console.log(id);
        const leader = await LeaderModel.findOne({ _id: id }).exec()
        if (leader != null) {
            // update
            // faq.product_id = req.body.product_id ? req.body.product_id : faq.product_id;
            // faq.question = req.body.question ? req.body.question : faq.question;
            // faq.answer = req.body.answer ? req.body.answer : faq.answer;

            leader.name = req.body.name ? req.body.name : leader.name
            leader.role = req.body.role ? req.body.role : leader.role
            leader.imageUrl = req.body.imageUrl ? req.body.imageUrl : leader.imageUrl

            await LeaderModel.updateOne({_id: id },leader).exec()
            return res.json(leader);
        } else {
            // create
            return res.status(400).json({ "message": "Error" })

        }
    }
}