const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const postsDB = require("./posts");
require("./connection/connection");

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Express router setup
const postRoutes = express.Router();
app.use("/post", postRoutes);

postRoutes.route("/").get(function(req, res) {
    postsDB.retrievePosts().then((postArray) => {
        res.json(postArray);
    });
    console.log("GET /post called");
});

// Run server
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
