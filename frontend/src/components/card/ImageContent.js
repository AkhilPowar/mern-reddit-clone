import React from "react";
import PropTypes from "prop-types";
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

ImageContent.propTypes = {
    title: PropTypes.string,
    time: PropTypes.string,
    voteCount: PropTypes.number,
    imageURL: PropTypes.string
};


export default ImageContent;