import React from 'react';
import SingleCommentView from './SingleCommentView';

class SingleComment extends React.Component {

    
    render() {
        return (
            <SingleCommentView {...this.props.comment}/>
        )
    }
}

export default SingleComment;

