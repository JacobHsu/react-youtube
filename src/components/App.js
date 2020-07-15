import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <header className="App-header">
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
