import React from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';

const AddCommentView = (props) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                Leave comment
                </label>
                <textarea
                onChange={props.onCommentChange}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                />
            </div>
            <div className="input-group" style={{marginBottom: '1rem'}}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                    </span>
                </div>
                <div className="custom-file">
                    <input
                    onChange={props.onFileChange}
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                    { props.fileName ? props.fileName : 'Choose file'}
                    </label>
                </div>
            </div>
            <MDBBtn onClick={props.onCommentSend} size="lg">Add Comment</MDBBtn>
        </div>
    )
}

export default AddCommentView;