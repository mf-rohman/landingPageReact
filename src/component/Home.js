import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            title : 'Welcome to My Home Web Page',
            subTitle : 'Lets Learn React JS'
        }
    }

    render() {
        return (
            <div className="col-4">
                <h1> {this.state.title}</h1>
                <p> {this.state.subTitle} </p>
            </div>
        );
    };
}

export default Home;