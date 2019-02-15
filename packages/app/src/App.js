import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// create a foo package for a quick test, then uncomment
// (run ./scripts/create-package.sh foo in the project root)
// import Foo from "@namespace/foo";

class App extends Component {
    componentDidMount() {
        // this.foo = new Foo();
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
