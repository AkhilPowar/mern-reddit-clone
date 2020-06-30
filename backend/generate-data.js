const faker = require("faker");
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
    insertRandomPostsIntoDatabase: function () {
        for(let i=0; i<100; i++) {
            const newPost = new Post({
                title: faker.lorem.words(),
                timeStamp: faker.date.recent(),
                content: faker.lorem.paragraph(),
                voteCount: faker.random.number()
            });
            newPost.save(function (err, post) {
                if (err) return console.error(err);
                console.log(post.title + " saved to " + collectionName + " collection.");
            });
        }
    }
}