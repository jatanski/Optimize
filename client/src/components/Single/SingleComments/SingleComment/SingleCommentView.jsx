import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from 'mdbreact';

const SingleCommentView = (props) => {
    return (
        <MDBCard >
            <MDBCardBody>
                <MDBCardTitle>{ props.who }</MDBCardTitle>
                <MDBCardText>{ props.content }</MDBCardText>
                <div>
                    <span>{ props.rating }</span>
                    <MDBIcon far icon="star" className="amber-text pr-3" size="2x" />
                </div>
            </MDBCardBody>
        </MDBCard>
    )
}

export default SingleCommentView;