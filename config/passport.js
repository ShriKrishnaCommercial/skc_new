const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Local Strategy for username/password authentication
passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username });
            if (!user) return done(null, false);
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) return done(null, false);
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

// JWT Strategy for token-based authentication
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY, // Replace with your secret key
};

passport.use(
    new JwtStrategy(jwtOptions, (payload, done) => {
        User.findById(payload.sub, (err, user) => {
            if (err) return done(err, false);
            if (user) return done(null, user);
            return done(null, false);
        });
    })
);
