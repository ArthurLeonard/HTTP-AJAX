import React from "react";
import "./components.css";



function Friend(props) {
  console.log(props.data.name);
  return (
    <div className="friend-card">
      <h2>{props.data.name}</h2>
      <p>Age: {props.data.age}   </p>
      <p>ID: {props.data.id}   </p>
      <p>email: {props.data.email}   </p>
      
      <button onClick = {e => {
          console.log('Hitting delete button - onClick handler');
          props.deleteItem(e, props.data.id);
        }}>X</button>
    </div>
  );
}

export default Friend;
