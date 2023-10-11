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
        res.status(201).json({message: 'User registered successfully'});
    } catch (err) {
        res.status(500).json({error: 'Failed to register user'});
    }

});


// Login route
router.post('/login', passport.authenticate('local', {session: false}), (req, res) => {
    const token = jwt.sign({sub: req.user._id}, process.env.SECRET_KEY); // Replace with your secret key
    res.json({token});
});

module.exports = router;
