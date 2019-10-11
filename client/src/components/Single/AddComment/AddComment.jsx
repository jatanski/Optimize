import React from 'react';
import AddCommentView from './AddCommentView';
import axios from 'axios';

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
        const response = await axios.post('url', {
            comment: this.state.comment,
            file: this.state.file
        });
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

