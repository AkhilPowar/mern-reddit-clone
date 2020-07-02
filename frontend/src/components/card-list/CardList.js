import React from "react";
import PropTypes from "prop-types";
import Card from "../card/Card";
import { getPosts } from "../../services/PostsService"

class CardList extends React.Component {
    state = {listItems: []};

    componentDidMount() {
        getPosts()
        .then((result) => {
            console.log(result);
            let postList = result.map((post) => (
                <Card key={post._id} title={post.title} time={post.timeStamp} voteCount={post.voteCount}>
                    {post.content}
                </Card>
            ))
            this.setState({listItems: postList});
        },
        (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="card-list">
                {this.state.listItems}
            </div>
        );
    }
}

// CardList.propTypes = {
//     posts: PropTypes.arrayOf(PropTypes.object)
// };

export default CardList;