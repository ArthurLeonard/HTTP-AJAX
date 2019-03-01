import React from "react";
import Friend from "./friend";
import "./components.css";

function FriendList(props) {
    console.log(`in friendlist comp with props.data = ${props.data}`);
  return (
      
    <div className="items-list-wrapper">
      {props.data.map(item => (
        <Friend data={item} deleteItem = {props.deleteItem} setUpdateForm={props.setUpdateForm} updateItem = {props.updateItem} />
      ))}
    </div>
  );
}

export default FriendList;
