import React from 'react';
import SingleMainView from './SingleMainView';

class SingleMain extends React.Component {

    render() {
        return (
            <SingleMainView {...this.props}/>
        )
    }
}

export default SingleMain;