import React from 'react';
import { MDBIcon } from 'mdbreact';
import './aside.scss';

const AsideView = (props) => {
    return (
        <aside className="main-aside main-menu" >
            <figure className="main-aside__logo">
                <img src="/logo.png" alt="Logo" width="70" height="70"/>
            </figure>
            <section className="main-aside__bottom">
                <MDBIcon icon="user-circle" />
                <MDBIcon far icon="question-circle" />
            </section>
        </aside>
    )
}

export default AsideView;