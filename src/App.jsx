import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import PathVisualizer from "./components/PathVisualizer/PathVisualizer";

class App extends Component {
  render() {
    return (
      <div className="app-shell">
        <PathVisualizer />
      </div>
    );
  }
}

export default App;
