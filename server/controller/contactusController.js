const ContactusModel = require('./../../models/contactusModel');

/**
 * contactusController.js
 *
 * @description :: Server-side logic for managing contactuss.
 */
module.exports = {

    /**
     * contactusController.list()
     */
    list: async function (req, res) {
        const all = await ContactusModel.find({})

        return res.json(all);

    },

    /**
     * contactusController.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const contactus = await ContactusModel.findOne({ _id: id }).exec()
        if (contactus != null) {
            return res.json(contactus);
        } else {
            return res.json({ "message": "not found !" });
        }

  
    },

    /**
     * contactusController.create()
     */
    create: async function (req, res) {
        const contactus = new ContactusModel({
			contactus : req.body.contactus,
			Registered : req.body.Registered,
			Warehouse : req.body.Warehouse,
			Branch : req.body.Branch});
            try {
                await ContactusModel.create(contactus);
        return res.status(201).json(contactus)
            } catch (e) {
            return res.status(400).json({ "message": "Error" + e })

        }

},

/**
 * contactusController.update()
 */
update: async function (req, res) {
    const id = req.params.id;
    const contactus = await ContactusModel.findOne({ _id: id }).exec()
    if (contactus != null) {
        // update
        contactus.contactus = req.body.contactus ? req.body.contactus : contactus.contactus;
			contactus.Registered = req.body.Registered ? req.body.Registered : contactus.Registered;
			contactus.Warehouse = req.body.Warehouse ? req.body.Warehouse : contactus.Warehouse;
			contactus.Branch = req.body.Branch ? req.body.Branch : contactus.Branch;
			
        await ContactusModel.updateOne({_id: id },contactus).exec()
        return res.json(contactus);
    } else {
        // create
        return res.status(400).json({ "message": "Error" })
       
    }
},

/**
 * contactusController.remove()
 */
remove: async function (req, res) {
    const id = req.params.id;
   await ContactusModel.findByIdAndDelete(id).exec();
        return res.status(204).json();

}
};