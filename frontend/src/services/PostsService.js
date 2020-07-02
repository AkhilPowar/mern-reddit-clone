module.exports = {
    getPosts: function(){
        return fetch("http://localhost:4000/post")
        .then(res => {return res.json()}, err => console.log(err))
        .then((result) => {
            console.log(result);
            return result;
        });
    }
}