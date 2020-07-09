const Router = require('express');
const posts = require('./posts');

module.exports = {
    initializeAPI() {
        const router = Router.Router();
        posts.postsAPI(router);
        console.log("APIs initialized successfully");
        return router;
    }
}