import React from 'react';
import SingleComment from './SingleComment/SingleComment';

const SingleCommentsView = (props) => {
    
    return (
        <React.Fragment>
            { props.comments ? props.comments.map(c => (<SingleComment comment={c} key={c.id} />)) : 'No comments yet :('}
        </ React.Fragment>
    )
}

export default SingleCommentsView;