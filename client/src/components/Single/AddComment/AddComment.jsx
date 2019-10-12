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
        const obj = {
            content: this.state.comment,
            name: 'Chuj temu w dupe :)',
            threadId: '5da1383f471bed9fcd43f4aa',
            teamId: '5da12ea4913c6f2f002619dc'
        }

        const response = await axios.post('http://localhost:8000/api/comments', obj, {
            headers: {
                ...baseUtils.getAuthTokenHeaderObj()
            }
        });

        console.log(response)
    };

    onCommentChange = (ev) => {
        this.setState({
            comment: ev.target.value
        })
    }

    onFileChange = ev => {
        const uploadedFile = ev.target.files[0];
        console.log(uploadedFile)
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
            />
        )
    }
}

export default AddComment;

