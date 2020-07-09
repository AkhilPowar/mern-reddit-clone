const router = require('express').Router();
const Post = require('../models/posts');

module.exports = {
    postsAPI(app) {
        app.use("/post", router);

        router.route("/").get(function(req, res) {
            Post.retrievePosts().then((postArray) => {
                res.json(postArray);
            },
            (err) => {console.log(err)});
            console.log("GET /post called");
        });
    }
}