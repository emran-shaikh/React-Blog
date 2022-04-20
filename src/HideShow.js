import React, { useState } from "react";

function HideShow() {
  const [status, setStatus] = useState(true);

  return (
    <div>
      {status ? <h1>I am here!</h1> : null}
      {/* <button onClick={() => setStatus(true)}>Show</button>
      <button onClick={() => setStatus(false)}>Hide</button> */}
      <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
}
export default HideShow;
