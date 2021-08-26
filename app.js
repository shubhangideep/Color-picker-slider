import React from "react";
var a = 0;

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
       red: 255,
       green: 0,
       blue: 0
    };
  }
   handleRed=(event)=>{
     this.setState({
       red: event.target.value
     })
   };
   handlegreen=(event)=>{
    this.setState({
      green: event.target.value
    })
  };
  handleblue=(event)=>{
    this.setState({
      blue: event.target.value
    })
  };
  //THIS IS THE RENDER FUNCTION
  render() {
    return (
      <div style={{
        backgroundColor: "rgb("+this.state.red+","+this.state.green+" , "+this.state.blue+")",
        height: "100vh"
      }}
      >
        <div 
        style={{
          backgroundColor: "white",
          width: 200,
          padding: 20,
          borderRadius: 10
          
        }}
       >
         <h1>Color Picker</h1>
        red:
        <input 
        type="range"
         value={this.state.red}
         onChange={this.handleRed}
         /> 
         <br />
        green:
        <input type="range"
        value={this.state.green}
        onChange={this.handlegreen}
        /> 
        <br />
        blue : 
        <input type="range"
        value={this.state.blue}
        onChange={this.handleblue}
        /> 
        <br />3
        {this.state.red}
        </div>
      </div>
    );  
  }
}
