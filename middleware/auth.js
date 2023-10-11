import jwt from 'jsonwebtoken';

export default function authMiddleware(handler) {
    return async (req, res) => {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        try {
            const decodedToken = jwt.verify(token, 'your-secret-key');
            req.userId = decodedToken.userId;
            return handler(req, res);
        } catch (error) {
            return res.status(401).json({ error: 'Invalid token' });
        }
    };
}
