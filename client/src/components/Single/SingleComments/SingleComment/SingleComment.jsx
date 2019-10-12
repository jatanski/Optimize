import React from 'react';
import SingleCommentView from './SingleCommentView';

class SingleComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false
        }
    }

    onLikeClick = () => {
        this.setState({
            isLiked: true
        })
    }
    
    render() {
        return (
            <SingleCommentView onClick={this.onLikeClick} liked={this.state.isLiked} {...this.props.comment}/>
        )
    }
}

export default SingleComment;

