import React from "react";

class DidMount extends React.Component{
    constructor(){
        super();
        console.warn('constructor')
        this.state={
            count:0
        }
    }

    componentDidUpdate(preProps, preState, snapShopt){
        console.warn('componentDidMount',preState.count,this.state.count);
        if(preState.count === this.state.count){
            alert('the values are same')
        }
        
    }

    render(){
        console.warn('render');
        return(
            <div>
                <p>Did Mount Component update {this.state.count}</p>
                <button onClick={()=>{this.setState({count:1})}}>Click to Update</button>
            </div>
        )
    }
}
export default DidMount;