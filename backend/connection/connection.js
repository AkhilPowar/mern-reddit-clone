const mongoose = require("mongoose");

const dbName = "mern-reddit-clone";

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/" + dbName, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const dbConnection = mongoose.connection;
dbConnection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});
