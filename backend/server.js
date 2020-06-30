const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const generateData = require("./generate-data");
require("./connection/connection");

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Express router setup
const postRoutes = express.Router();
app.use("/post", postRoutes);

postRoutes.route("/").get(function(req, res) {
    generateData.insertRandomPostsIntoDatabase();
    res.json({ success: true });
});

// Run server
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
