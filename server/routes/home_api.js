const express = require('express');

const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const homemodel = require("../../models/homeModel");
const home = express.Router();


home.post("/home", async (req, res) => {
    const {about_us, why_choose_us} = req.body
    try {
        const data = new homemodel();
        const check = await homemodel.find({"data": "home"}).count()
        if (check > 0) {

            //     update

            const get = await homemodel.findOne({"data": "home"}).exec();
            if (get != null) {
                await homemodel.updateOne({"data": "home"},
                    {
                        "about_us":
                        about_us
                        , "why_choose_us":
                        why_choose_us
                    }).exec()
                res.json({"message": "updated"})
            }


        } else {

            await homemodel.create(
                {
                    "about_us":
                    about_us
                    , "why_choose_us":
                    why_choose_us,
                    "data": "home"

                })
            res.json({"message": "updated"})

            //create
        }
    } catch (e) {
        console.log(e)
        res.json({"error": e})

    }


})

home.get("/home", async (req, res) => {
    const check = await homemodel.find({"data": "home"}).exec();
    res.json(check);
})

module.exports = home;