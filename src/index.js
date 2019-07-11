import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './home';
import Works from './works';

import './index.scss';

class App extends Component {

    render(){
        return(
            <div>
                <Home />
                <Works />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));
