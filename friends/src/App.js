import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import Friend from "./components/friend";
import FriendList from "./components/friendlist";
import ItemForm from './components/ItemForm';


import {
  BrowserRouter as Router,
  NavLink,
  Route,
  withRouter
} from 'react-router-dom';


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
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log("got the following from server", res.data);
        this.setState({ items: res.data });
      })
      .catch(err => {
        console.log("in catch error", err);
        this.setState({ error: err });
      });
  }

  addItem = (e, item) => {
    e.preventDefault();
    console.log(`in addItem method`);

    axios
      .post('http://localhost:5000/friends', item)
      .then(res => {
        this.setState({
          items: res.data
        });
        // HTTP STEP V - Clear data form in ItemForm and route to /item-list
        // this.props.history.push('/item-list');
      })
      .catch(err => {
        console.log(err);
      });
  }; //end addItem()


  deleteItem = (e, id) => {
    e.preventDefault();
    console.log('now in deleteItem in App');
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log('Data is back, now set state and reroute', res.data);
        this.setState({
          items: res.data
        });
        // this.props.history.push('/item-list');
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = (e, id) => {
    console.log('now in setUpdateForm in App');

  }

  updateItem = (e, item) => {
    e.preventDefault();
    console.log(`in updateItem method`);

    axios
      .put(`http://localhost:5000/friends/${item.id}`, item)
      .then(res => {
        this.setState({
          // activeItem: null,
          items: res.data
        });
        // this.props.history.push('/item-list');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Add New Friend</h1>
          <ItemForm 
              addItem = {this.addItem}
              updateItem = {this.updateItem}
              // deleteItem = {this.deleteItem}    
          />
        </header>

        <FriendList
          data={this.state.items} 
          deleteItem = {this.deleteItem} 
          setUpdateForm = {this.setUpdateForm}
          updateItem = {this.updateItem}
        />


        {/* <Route
          path="/item-form"
          render={props => (
            <ItemForm
              {...props}
              activeItem={this.state.activeItem}
              addItem={this.addItem}
              updateItem={this.updateItem}
            />
          )}
        /> */}
      </div>
    );
  }
}

export default App;
