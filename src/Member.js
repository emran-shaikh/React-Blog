import React from "react";

function Member(props) {
  return (
    <div>
      <h1>Hello Member from App</h1>
      <button onClick={props.data}>Click it</button>
    </div>
  );
}

export default Member;
