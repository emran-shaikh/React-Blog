import React, { useState } from "react";

function ForUseEffect(){
    const [count, setCount]=useState(0)
    React.useEffect(()=>{
        console.warn('useEffect');
    })
    return(
        <div>
        <h4>Here we are using Use effect hook and count is {count}</h4>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        </div>
    )
}
export default ForUseEffect;