const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    const {username, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = new User({username, password: hashedPassword});
        await newUser.save();
        const token = jwt.sign({id: newUser._id, username: newUser.username}, "121322100581990")
        res.status(201).json({message: 'User registered successfully', "token": token});
    } catch (err) {
        res.status(500).json({error: 'Failed to register user' + err});
    }
});


// Login route
router.post('/login', async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({"username": username}).exec();
        if (user != null) {

            const dpassword = user.password;
            const check = await bcrypt.compare(password, dpassword)
            console.log(check)
            if (check === true) {
                //     login jwt new
                const token = jwt.sign({id: user._id, username: user.username}, "121322100581990")
                res.json({
                    "message": "loggedin",
                    "token": token
                })
            } else {
                throw "invalid details";
            }
        } else {
            throw "user not found";
        }


    } catch (e) {
        res.json({
            "message": "error",
            "token": e
        })

    }

    // token = jwt.sign({sub: req.user._id}, process.env.SECRET_KEY);
    // res.json({token});
});

module.exports = router;
