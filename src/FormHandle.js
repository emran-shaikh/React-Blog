import React, {useState} from "react";

function FormHandle(){

    const [name, setName] = useState('');
    const [interest, setInterest] = useState('');
    const [tnc, setTnC] = useState(false);


    function getFormdata(e){
        console.log(name,interest,tnc);
        e.preventDefault();
    }
    return(
        <div>
        <h1>Form Handeling in React </h1>
        <form onSubmit={getFormdata}>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select Option</option>
                <option>Option One</option>
                <option>Option Two</option>
                <option>Option Three</option>
            </select><br/><br/>
            <input type="checkbox"  onChange={(e)=>setTnC(e.target.checked)}/> <span>Accept the term and conditions</span><br/><br/>
            <button type="submit">Submit</button>

        </form>
        </div>
    )
}

export default FormHandle;