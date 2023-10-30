const ClientsModel = require('./../../models/clientsModel.js');

/**
 * clientsController.js
 *
 * @description :: Server-side logic for managing clientss.
 */
module.exports = {

    /**
     * clientsController.list()
     */
    list: async function (req, res) {
        const all = await ClientsModel.find({})

        return res.json(all);

    },

    /**
     * clientsController.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const clients = await ClientsModel.findOne({_id: id}).exec()
        if (clients != null) {
            return res.json(clients);
        } else {
            return res.json({"message": "not found !"});
        }


    },

    /**
     * clientsController.create()
     */
    create: async function (req, res) {
        const clients = new ClientsModel({
            clients: req.body.clients,
            type: req.body.type
        });
        try {
            await ClientsModel.create(clients);
            return res.status(201).json(clients)
        } catch (e) {
            return res.status(400).json({"message": "Error" + e})

        }

    },

    /**
     * clientsController.update()
     */
    update: async function (req, res) {
        const id = req.params.id;
        const clients = await ClientsModel.findOne({_id: id}).exec()
        if (clients != null) {
            // update
            clients.clients = req.body.clients ? req.body.clients : clients.clients;
            clients.type = req.body.type ? req.body.type : clients.type;

            await ClientsModel.updateOne({_id: id}, clients).exec()
            return res.json(clients);
        } else {
            // create
            return res.status(400).json({"message": "Error"})

        }
    },

    /**
     * clientsController.remove()
     */
    remove: async function (req, res) {
        const id = req.params.id;
        await ClientsModel.findByIdAndDelete(id).exec();
        return res.status(204).json();

    }
};