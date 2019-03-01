import React, { Component } from "react";

import Friend from "./friend";
import "./components.css";

class ItemForm extends Component /*(props)*/ {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            id: ''
        };
    } //end constructor

    handleChanges = e => {
        e.preventDefault();
        // console.log(`e.target.value is ${e.target.value} and e.target.name is ${e.target.name}`);
        this.setState({
            [e.target.name]: e.target.value
        }); //end setState
        // console.log(this.state.name, this.state.age, this.state.email);
    } //end handleChanges()

    handleSubmit = e => {
        e.preventDefault();
        // console.log(`in handleSubmit method`);
        const newFriend = {
            name:this.state.name,
            age: this.state.age,
            email: this.state.email,
            // id: this.state.id
        };
        this.setState({
            name: '',
            age: '',
            email: '',
            id: ''
        }); //end setState
        this.props.addItem(e, newFriend);
        // console.log(`New friend is ${newFriend.name} ${newFriend.id}`);
    }

    handleUpdate = e => {
        e.preventDefault();
        // console.log(`in handleUpdate method`);
        const updated = {
            name:this.state.name,
            age: this.state.age,
            email: this.state.email,
            id: this.state.id
        };
        this.setState({
            name: '',
            age: '',
            email: '',
            id: ''
        }); //end setState
        // console.log(`New friend is ${updated.name} ${updated.id}`);

        this.props.updateItem(e, updated);
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit} > 
                <input 
                    name = "name"
                    type = "text"
                    placeholder = "name"
                    onChange = {this.handleChanges}
                    value = {this.state.name}
                
                />

                <input 
                    name = "age"
                    type = "number"
                    placeholder = "age"
                    onChange = {this.handleChanges}
                    value = {this.state.age}
                
                />
                <input 
                    name = "email"
                    type = "text"
                    placeholder = "email"
                    onChange = {this.handleChanges}
                    value = {this.state.email}
                />

                <input 
                    name = "id"
                    type = "number"
                    placeholder = "id"
                    onChange = {this.handleChanges}
                    value = {this.state.id}
                />

                <button>Add</button>
            </form>

            <button onClick = {this.handleUpdate}>Update</button>
        </div>
        );
    } //end render


} // end itemform component

export default ItemForm;
