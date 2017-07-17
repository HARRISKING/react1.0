import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class App extends Component { 
  constructor(props){
    super(props)
    this.state = {
      newTodo: 'test1',
      todoList: [
        {id:1,title:'第一个代办'},
        {id:2,title:'第二个代办'}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
        <li>
          <TodoItem todo={item} />
      </li>
      )
    })
    return (
      <div className="App">
        <div class="inputWrapper">
          {/* <input type="text" value={this.state.newTodo} /> */}
          <TodoInput content={this.state.newTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
      
    )
  }
}

export default App;
