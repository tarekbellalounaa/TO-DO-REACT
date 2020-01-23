import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);
  }
    Comp = () =>{
        props.todos.complete? false : true;
    }
  render() {
    return (
      <div>
        {props.todos.map(el => (
          <div className="affichage">
            <input onClick={this.Comp} className="completebutt" type="button" value={el.complete ? "Undo" : "Complete" } />

            <input onClick={this.Del(el.id) = ()=> props.todos.filter(el => el.id === id ) } className="deletebutt" type="button" value="Delete" />

            <p> {el.text} </p>
          </div>
        ))}
      </div>
    );
  }
}
export default Add;