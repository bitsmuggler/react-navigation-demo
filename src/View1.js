
import React from 'react';

import {
    Redirect
} from "react-router-dom";

// Navigating declarative way

class View1 extends React.Component {
    state = {
        toView2: false,
    }

    nav = () => {
        this.setState({toView2: true});
    }

    render() {
        if (this.state.toView2) {
            return <Redirect to='/view-2'></Redirect>
        }
    
        return (
    
            <div>
                <h1>View 1</h1>
                <button onClick={this.nav}>Nav to view 2</button>
            </div>
        );
    }
}

export default View1;