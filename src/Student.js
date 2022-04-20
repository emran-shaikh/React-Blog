import React, { useState } from "react";
import NewStudent from "./NewStudent";
import Users from "./Users";
import GetInput from "./GetInput";
import HideShow from "./HideShow";

function Student() {
  const [name, setName] = useState("Emran");
  const [phone, setPhone] = useState("00000");
  return (
    <div>
      <HideShow />
      <h1>{name}</h1>
      <Users name={"Emran"} email={"emran@test.com"} />
      <button
        onClick={() => { setName("Shaikh"); }} > Click me </button>
      <h1>Phone: {phone}</h1>
      <NewStudent name={"John"} phone={"00000"} />
      <button onClick={() => { setPhone("6789");}}> Click me</button>
      <br></br>
      <br />
      <GetInput />
    </div>
  );
}

export default Student;
