const ContactModel = require('./../../models/contactusModel.js');

/**
 * contactController.js
 *
 * @description :: Server-side logic for managing contacts.
 */
module.exports = {

    /**
     * contactController.list()
     */
    list: async function (req, res) {
        const all = await ContactModel.find({})

        return res.json(all);

    },

    /**
     * contactController.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const contact = await ContactModel.findOne({_id: id}).exec()
        if (contact != null) {
            return res.json(contact);
        } else {
            return res.json({"message": "not found !"});
        }


    },

    /**
     * contactController.create()
     */
    create: async function (req, res) {
        const contact = new ContactModel({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            company: req.body.company,
            email: req.body.email,
            pno: req.body.pno,
            message: req.body.message
        });
        try {
            await ContactModel.create(contact);
            return res.status(201).json(contact)
        } catch (e) {
            return res.status(400).json({"message": "Error" + e})

        }

    },

    /**
     * contactController.update()
     */
    update: async function (req, res) {
        const id = req.params.id;
        const contact = await ContactModel.findOne({_id: id}).exec()
        if (contact != null) {
            // update
            contact.first_name = req.body.first_name ? req.body.first_name : contact.first_name;
            contact.last_name = req.body.last_name ? req.body.last_name : contact.last_name;
            contact.company = req.body.company ? req.body.company : contact.company;
            contact.email = req.body.email ? req.body.email : contact.email;
            contact.pno = req.body.pno ? req.body.pno : contact.pno;
            contact.message = req.body.message ? req.body.message : contact.message;

            await ContactModel.updateOne({_id: id}, contact).exec()
            return res.json(contact);
        } else {
            // create
            return res.status(400).json({"message": "Error"})

        }
    },

    /**
     * contactController.remove()
     */
    remove: async function (req, res) {
        const id = req.params.id;
        await ContactModel.findByIdAndDelete(id).exec();
        return res.status(204).json();

    }
};