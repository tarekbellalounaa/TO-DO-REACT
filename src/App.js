import React from "react";
import "./App.css";
import { render } from "@testing-library/react";
import uuid from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todos: []
    };
  }
  Comp = id => {
    this.setState({
      todos: this.state.todos.map(el =>
        el.id === id ? { ...el, complete:!el.complete } : el 
      )
    });
  };
  Del = id => {
    this.setState({ todos: this.state.todos.filter(el => el.id !== id) });
  };
  add = e => {
    let newtodo = { text: this.state.input, id: uuid(), complete: false };
    this.setState({ todos: this.state.todos.concat(newtodo) , input:""});
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <div className="cadre">
          <p className="title">To-Do App!</p>
          <p className="subtitle">Add New To-Do</p>
          <div className="footer">
            <input
              onChange={this.handleChange}
              className="input"
              type="text"
              name="input"
              placeholder="Enter new task "
              value={this.state.input}
            />
            <input
              onClick={this.add}
              className="addbutton"
              type="button"
              name="addition"
              value="Add"
            />
          </div>
        </div>
        <div>
          <p className="motivation">Let's get some work done !</p>
        </div>
        {this.state.todos.map(el => (
          <div className="affichage">
          <div className="buttons">
            <input
              onClick={() => this.Comp(el.id)}
              className="completebutt"
              type="button"
              value={el.complete ? "Undo" : "Complete"}
            />

            <input
              onClick={() => this.Del(el.id)}
              className="deletebutt"
              type="button"
              value="Delete"
            />
            </div>
           <p className={el.complete?"undo" : "complete"}> {el.text} </p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
