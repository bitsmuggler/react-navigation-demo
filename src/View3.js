import React from 'react';
import {
    withRouter
  } from 'react-router-dom'

// navigate with the history props obj (history api) and withRouter function

class View3 extends React.Component {

    nav = () => {
        this.props.history.push('/view-1');
    }

    render() {
        return (
            <div>
                <h1>View 3</h1>
                <button onClick={this.nav}>Nav to view 1</button>
            </div>
        );
    }
}

export default withRouter(View3);