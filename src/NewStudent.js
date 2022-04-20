import React from "react"
export default class NewStudent extends React.Component{
    render(){
        return(
            <div>
            <h1>Name: {this.props.name}</h1>
            </div>
        )
    }
}