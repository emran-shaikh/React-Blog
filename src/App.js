import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Student from './Student';
import React, { Component, useState } from 'react';
import { render } from '@testing-library/react';

function App() {

  let [name, setName] = useState('Emran');

  function Apple(){
    alert('Hello');
  }

      return (
        <div className="App">
          <Student name={"Emran"} email={"emran@test.com"} />
          <button onClick={()=>{setName('Shaikh')}}>Click Me</button>
        </div>
    );

}

export default App;
