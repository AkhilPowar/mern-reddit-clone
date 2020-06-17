import React from "react";
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

export default TextContent;