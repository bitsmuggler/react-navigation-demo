import React from 'react';


// navigate with the history props obj (history api)

class View2 extends React.Component {

    nav = () => {
        this.props.history.push('/view-3');
    }

    render() {
        return (
            <div>
                <h1>View 2</h1>
                <button onClick={this.nav}>Nav to view 3</button>
            </div>
        );
    }
}

export default View2;