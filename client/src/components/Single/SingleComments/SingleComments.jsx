import React from 'react';
import SingleCommentsView from './SingleCommentsView';

class SingleComments extends React.Component {

    render() {
        return (
            <SingleCommentsView comments={this.props.comments}/>
        )
    }
}

export default SingleComments;

