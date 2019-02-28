import React from "react";

function Friend(props) {
  console.log(props.data.results);
  return (
    <div className="item-wrapper">
      <h2>{props.data}</h2>
    </div>
  );
}

export default Friend;
