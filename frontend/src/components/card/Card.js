import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {

    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">{ this.props.title }</div>
                    <div className="meta">{ this.props.time }</div>
                    <div className="description">
                    <p></p>
                    </div>
                </div>
                <div className="extra content">
                    <i className="check icon"></i>
                    { this.props.voteCount } upvotes
                </div>
            </div>
        )
    }
}

export default Card;