import React from "react";
import './App.css';

class New extends React.Component{

  constructor(){
    super();
    this.clik=this.clik.bind(this);
    this.state={
      name:"animal",
      like:200
    };
   }
   clik(){
    var liked=this.state.like++;
      //console.log(liked)
    this.setState({
      name:"animal",
      liked:liked
    })
   }
  render(){
    return( 

    <div>
      <h1>HI Welcome</h1>
        <h2>the post {this.state.name}</h2>
        <h2> like for post{this.state.like}</h2>
        <button onClick={this.clik}>Like </button>

      </div>
       )
  }
}

export default New;