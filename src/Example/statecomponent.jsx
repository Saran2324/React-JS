import React from "react";
class State extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Orikita Sisunae"
        }
    }
    changeState=()=>{
    }
    render(){
        return(
            <div>
            <h1>This is {this.state.name}</h1>
            
            <button onMouseOver={this.changeState}>button</button>
            </div>
        )  
    }
}
export default State