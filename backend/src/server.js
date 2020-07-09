const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const api = require("./api");
const cors = require("cors");
require("./connection/connection");

const PORT = 4000;

async function startServer() {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(api.initializeAPI());

    await require('./loaders').load({ expressApp: app });

    // Run server
    app.listen(PORT, function() {
        console.log("Server is running on Port: " + PORT);
    });
}

startServer();
