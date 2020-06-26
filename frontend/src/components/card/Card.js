import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {

    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">{ this.props.title }</div>
                    <div className="meta">{ this.props.time }</div>
                    <div className="description">
                        { this.props.children }
                    </div>
                </div>
                <div className="extra content">
                    <i className="check icon"></i>
                    { this.props.voteCount } upvotes
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    time: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    voteCount: PropTypes.number
};

export default Card;