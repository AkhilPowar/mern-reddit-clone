const mongoose = require('mongoose');
const config = require('../config');

module.exports = { 
    async load() {
        const connection = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true });
        return connection.connection.db;
    }
};