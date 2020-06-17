import React from "react";
import Card from "./Card";

class ImageContent extends React.Component {
    render() {
        return (
            <Card type="text" title={this.props.title} time={this.props.time} voteCount={this.props.voteCount}>
                <img src={ this.props.imageURL }></img>
            </Card>
        );
    }
}

export default ImageContent;