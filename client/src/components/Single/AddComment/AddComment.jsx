import React from 'react';
import AddCommentView from './AddCommentView';
import axios from 'axios';
import baseUtils from '../../../utils/baseUtils';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            file: '',
            fileName: ''
        }
    }

    onCommentSend = async () => {
        console.log('Wysyłam komentarz...');
        this.setState({
            comment: ''
        })
        const obj = {
            content: this.state.comment,
            name: 'Chuj temu w dupe :)',
            threadId: this.props.threadId,
            teamId: this.props.teamId
        }

        const response = await axios.post('http://localhost:8000/api/comments', obj, {
            headers: {
                ...baseUtils.getAuthTokenHeaderObj()
            }
        });
        this.props.onCommentAdded(response.data)
    };

    onCommentChange = (ev) => {
        this.setState({
            comment: ev.target.value
        })
    }

    onFileChange = ev => {
        const uploadedFile = ev.target.files[0];
        this.setState(state => {
            return { file: uploadedFile, fileName: uploadedFile.name}
        })
    }

    render() {
        return (
            <AddCommentView 
                onCommentSend={this.onCommentSend}
                onCommentChange={this.onCommentChange}
                onFileChange={this.onFileChange}
                fileName={this.state.fileName}
                inputValue={this.state.comment}
            />
        )
    }
}

export default AddComment;

