import React, { useState } from 'react';
function Student(){
    const [name, setName] = useState('Emran');
    return(
        <div>
            <h1>{name}</h1>
          <Users name={"Emran"} email={"emran@test.com"} />
          <button onClick={()=>{setName('Shaikh')}}>Click me</button>
        </div>
    )
}

export default Student;