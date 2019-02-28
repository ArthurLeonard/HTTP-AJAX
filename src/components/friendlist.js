import React from "react";
import Friend from "./friend";

function FriendList(props) {
  return (
    <div className="items-list-wrapper">
      {props.data.map(item => (
        <Friend data={item} />
      ))}
    </div>
  );
}

export default FriendList;
