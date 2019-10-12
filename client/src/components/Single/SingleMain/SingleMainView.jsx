import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import baseUtils from '../../../utils/baseUtils';

const SingleMainView = (props) => {
    return (
        <MDBCard>
            <MDBCardBody>
                <MDBCardTitle>
                    {props.who}
                    <small>{baseUtils.timestampToDays(props.date)} days ago</small>
                </MDBCardTitle>
                <MDBCardText>{props.content}</MDBCardText>
                <section className="single-post__image">
                    { props.screens ? props.screens.map((screen, i) => (<img key={i} src={screen} />)) : null }
                </section>
            </MDBCardBody>
        </MDBCard>
    )
}

export default SingleMainView;