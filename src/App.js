import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import uuid from "uuid";
import Add from 'Add.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todos:[],
    };
  }
  add = e => {
    let newtodo = { text: this.state.input, id: uuid(), complete: false };
this.setState({ todos : todos.concat(newtodo)})
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
            />
            <input onClick={this.add}
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
              <Add todos={this.state.todos}/>
          </div>
    );
  }
}

export default App;
