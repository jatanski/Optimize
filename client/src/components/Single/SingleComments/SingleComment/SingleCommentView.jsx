import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from 'mdbreact';

const SingleCommentView = (props) => {
    return (
        <MDBCard >
            <MDBCardBody>
                <MDBCardTitle>{ props.who }</MDBCardTitle>
                <MDBCardText className="comment__text">{ props.content }</MDBCardText>
                <div className="comment__rating">
                    <span>{ props.rating }</span>
                    <img onClick={ props.onClick } src={ !props.liked ? "/star.png" : "/star2.png" } style={{cursor: 'pointer'}} width="20" height="20" alt="rating star"/>
                </div>
            </MDBCardBody>
        </MDBCard>
    )
}

export default SingleCommentView;