import React, {Component} from 'react';
import {renderRoutes} from 'react-router-config';
// Define your global components here

class App extends Component {

    render() {
        return (
            <div className="default_layout">
                {/* <Header /> */}
                {renderRoutes(this.props.route.routes)}
                {/* <Footer/> */}
            </div>
        );  
    }

};

export default {
    component: App
};