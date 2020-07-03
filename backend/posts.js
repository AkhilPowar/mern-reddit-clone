const mongoose = require("mongoose");

const collectionName = "posts";

const postSchema = new mongoose.Schema({
    title: String,
    timeStamp: Date,
    content: String,
    voteCount: Number
});

const Post = mongoose.model("Post", postSchema, collectionName);

module.exports = {
    retrievePosts: function () {
        return Post.find((err, res) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.toString();
        })
    }
}