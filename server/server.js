const express = require('express');
const next = require('next');
const dbConnect = require("../utils/dbConnect");
const auth = require("./routes/auth")
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    const server = express();
    await dbConnect()
    server.use(auth);
    server.get('/test',(req, res) => {
        console.log("wrfwefew")
    })



    // Handle all other routes with Next.js
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const port = process.env.PORT || 3000;

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Server is running on http://localhost:${port}`);
    });
});
