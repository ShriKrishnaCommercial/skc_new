const jwt = require('jsonwebtoken');

module.exports = function jwtauth(handler) {
    return async (req, res) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({error: 'Unauthorized'});
        }
        try {
            const decodedToken = jwt.verify(token, "121322100581990");
            req.userId = decodedToken.username;
            return req;
        } catch (error) {
            return res.status(401).json({error: 'Invalid token'});
        }
    };
}
