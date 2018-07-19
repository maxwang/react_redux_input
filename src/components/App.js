import React, { Component } from "react";
import { render } from "react-dom";
import InputMirror from './InputMirror';
import store from '../store/AppStore';

class App extends React.Component {
    render() {
        return (
            <div>
                <InputMirror store={store} />
            </div>
            
        );
    }
}

export default App;