const express = require('express');
const next = require('next');
const dbConnect = require("../utils/dbConnect");

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const passport = require("passport");
const session = require("express-session");
const auth = require("./routes/auth")
const {json} = require("express");
const home = require("./routes/home_api");
const about = require("./routes/aboutusRoutes");
const brand = require("./routes/brandsRoutes");
const client = require("./routes/clientsRoutes");
const contactus = require("./routes/contactusRoutes");
const cvrouter = require("./routes/cvRoutes");
const product = require("./routes/productsRoutes");
const subproduct = require("./routes/subproductRoutes");
const endproduct = require("./routes/endproductRoutes");
app.prepare().then(async () => {
    const server = express();
    await dbConnect()
    server.use(json())
    server.get('/test', (req, res) => {
        res.json("ji")

    })


    server.use('/api', auth);
    server.use('/api', home);
    server.use('/api/about', about);
    server.use('/api/brands', brand);
    server.use('/api/clients', client);
    server.use('/api/contactus', contactus);
    server.use('/api/cvform', cvrouter);
    server.use('/api/product', product);
    server.use('/api/subproduct', subproduct);
    server.use('/api/endproduct', endproduct);

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
