import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

class TextContent extends React.Component {
    render() {
        return (
            <Card type="text" title={this.props.title} time={this.props.time} voteCount={this.props.voteCount}>
                <p>
                    { this.props.content }
                </p>
            </Card>
        );
    }
}

TextContent.propTypes = {
    title: PropTypes.string,
    time: PropTypes.string,
    voteCount: PropTypes.number,
    content: PropTypes.string
};

export default TextContent;