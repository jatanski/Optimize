import React from 'react';
import Aside from '../components/Aside/Aside';
import Menu from '../components/Menu/Menu';
import MainContent from '../components/MainContent/MainContent';

class Logged extends React.Component {

    render() {
        return (
            <div className="main-container">
                <Aside />
                <Menu />
                <MainContent />
            </div>
        )
    }
}

export default Logged;