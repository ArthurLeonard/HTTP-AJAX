import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import Friend from "./components/friend";
import FriendList from "./components/friendlist";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      error: ""
    };
  }

  componentDidMount() {
    console.log("CDM now running");
    // http://localhost:3333 is the address to the server doorstep
    // /items is the "endpoint"
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log("got the following from server", res.data.results);
        this.setState({ items: res.data.results[0].films });
      })
      .catch(err => {
        console.log("in catch error", err);
        this.setState({ error: err });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="hobo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          />
        </header>
        <FriendList data={this.state.items} />
      </div>
    );
  }
}

export default App;
