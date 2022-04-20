import './App.css';
import Users from './Users';
import Student from './Student';
import React, { useState } from 'react';

function App() {

  const [name, setName] = useState('Emran');

      return (
        <div className="App">
          <Student name={"Emran"} email={"emran@test.com"} />
          <button onClick={()=>{setName('Shaikh')}}>Click me</button>
          <Users />
        </div>
        
    );

}

export default App;
