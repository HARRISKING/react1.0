import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css';
import './reset.css';

class App extends Component { 

  //初始化props和state;
  constructor(props){
    //App新构造的函数参数为props
    super(props)
    //调用父对象react.component的参数props
    this.state = {
      newTodo: '',
      todoList: [
        {id:1,title:'第一个代办'},
        {id:2,title:'第二个代办'}
      ]
    }
  }

  //将render中return的内容插入到页面上；
  render() {
    let todos = this.state.todoList.filter((item)=> !item.deleted)
    .map((item,index)=>{
        return (
          <li key={index}>
            <TodoItem todo={item} onToggle={this.toggle.bind(this)}
            onDelete={this.delete.bind(this)}/>
        </li>
      )
    })
    return (
      <div className="App">
        <h1>我的代办</h1>
        <div className="inputWrapper">
          {/* <input type="text" value={this.state.newTodo} /> */}
          <TodoInput content={this.state.newTodo}  
          onChange={this.changeTitle.bind(this)} 
          onSubmit={this.addTodo.bind(this)} />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
      
    )
  }



  // addTodo(){
  //   console.log("我要添加一个todo");
  // }
  toggle(e,todo){
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }

  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
  delete(event,todo){
  todo.deleted = true
  this.setState(this.state)
}
}

export default App;

let id = 0;
function idMaker (){
  id += 1
  return id
}
