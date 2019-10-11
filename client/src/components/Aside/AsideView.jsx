import React from 'react';
import { MDBIcon } from 'mdbreact';

const AsideView = (props) => {
    return (
        <aside className="main-aside" >
            <figure className="main-aside__logo">
                <img src="/logo.png" alt="Logo"/>
            </figure>
            <section className="main-aside__bottom">
                <MDBIcon icon="user-circle" />
                <MDBIcon far icon="question-circle" />
            </section>
        </aside>
    )
}

export default AsideView;