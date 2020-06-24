const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mern-reddit', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const dbConnection = mongoose.connection;
dbConnection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


// Express router setup
const postRoutes = express.Router();
app.use('/post', postRoutes);

postRoutes.route('/').get(function(req, res) {
    res.json({ success: true });
});


// Run server
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
