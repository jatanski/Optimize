import React from 'react';
import AddComment from '../components/Single/AddComment/AddComment';
import SingleMain from '../components/Single/SingleMain/SingleMain';
import Comments from '../components/Single/SingleComments/SingleComments';
import { withRouter } from 'react-router';
import axios from 'axios';
import baseUtils from '../utils/baseUtils';
class SinglePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thread: {}
        }
    }
    

    getThread = async () => {
        const response = await axios.get(`${baseUtils.baseApiUrl}teams/`, {
            headers: {
                ...baseUtils.getAuthTokenHeaderObj()
            }
        })
        const threads = response.data.threads;
        const myThread = threads.filter(t => {
            return t._id === this.props.location.state.threadId
        })
        this.setState(state => {
            return {
                thread: myThread[0]
            }
        })
    }

    onCommentAdded = (comment) => {
        let newThread = this.state.thread;
        newThread.comments.push(comment);
        this.setState({
            thread: newThread
        })
    
    }

    componentDidMount() {
        this.getThread()
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-content__top-bar">Thread Details</div>
                <section className="single-post">
                    <div className="single-post__left">
                        <SingleMain {...this.state.thread}/>
                    </div>
                    <div className="single-post__right">
                        <div className="overflow-fix">
                            <Comments comments={this.state.thread.comments} />
                        </div>
                        <AddComment onCommentAdded={this.onCommentAdded} threadId={this.props.location.state.threadId} teamId={this.props.location.state.teamId} />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(SinglePostPage);