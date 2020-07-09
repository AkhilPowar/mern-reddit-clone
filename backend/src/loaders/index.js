const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

module.exports = {
    async load(expressApp) {
        const mongoConnection = await mongooseLoader.load();
        console.log('MongoDB connection established')

        await expressLoader.load(expressApp.expressApp);
        console.log('Express loaded');
    }
}