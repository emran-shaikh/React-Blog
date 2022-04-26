import React,{useEffect, useState} from "react";
import EffectsProps from "./EffectsProps";

function EffectCondition(){
    const [count, setCount]=useState(100)
    const [data, setData]=useState(10)
    useEffect(()=>{
        console.warn('Use Effect working States')
    })
    return(
        <div>
        <EffectsProps count={count} data={data} />
        <button onClick={()=>setCount(count+1)}>Update count</button>
        <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
    )
}

export default EffectCondition;