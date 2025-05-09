import React, { Component } from "react";
import "./todoapp.css";
export default class Todoapp extends Component {
  state = {
    input: "",
    items: [],
  };

  handlechange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeitems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const allitems = this.state.items;

    allitems.push(input);

    this.setState({
      // items:[...this.state.items,input],  spread operator high order functions
      items: allitems,
      input: " ",
    });
    console.log(allitems);
  };

  deleteitem = (key) => {
    const allitems = this.state.items;
    //deleting the value on based on index
    allitems.splice(key, 1);
    //items:this.state.items.filter((data,index)=>index != key)  filter high order functions
    this.setState({
      items: allitems,
    });
  };

  render() {
    //destructring

    const { input, items } = this.state;
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeitems}>
          <h1>Todo List</h1>
          <input
            type="text"
            value={input}
            onChange={this.handlechange}
            placeholder="Enter Items.."
          />
        </form>
        <ul>
          {/*map high order function iteration*/}
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                className="fa-solid fa-trash-can"
                onClick={() => this.deleteitem(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
